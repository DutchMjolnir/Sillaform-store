"use client";

import { useSyncExternalStore } from "react";
import {
  FAVORITES_EVENT,
  FAVORITES_KEY,
  readFavoriteIds,
  saveFavoriteIds,
} from "@/lib/favorites";

function subscribe(callback: () => void) {
  window.addEventListener(FAVORITES_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(FAVORITES_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(FAVORITES_KEY) ?? "[]";
}

function getServerSnapshot() {
  return "[]";
}

export function FavoriteButton({ productId }: { productId: number }) {
  const favoritesSnapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  let favoriteIds: number[] = [];

  try {
    favoriteIds = JSON.parse(favoritesSnapshot) as number[];
  } catch {
    favoriteIds = [];
  }

  const favorite = favoriteIds.includes(productId);

  function toggleFavorite() {
    const currentIds = readFavoriteIds();

    const nextIds = currentIds.includes(productId)
      ? currentIds.filter((id) => id !== productId)
      : [...currentIds, productId];

    saveFavoriteIds(nextIds);
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-pressed={favorite}
      aria-label={
        favorite
          ? "Quitar silla de favoritos"
          : "Agregar silla a favoritos"
      }
      className="rounded-full border border-black/15 bg-white/80 px-3 py-2 text-sm font-semibold hover:bg-white"
    >
      {favorite ? "★ Guardada" : "☆ Guardar"}
    </button>
  );
}
