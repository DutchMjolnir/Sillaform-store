export const FAVORITES_KEY = "sillaforma:favorites";
export const FAVORITES_EVENT = "sillaforma:favorites-changed";
export function readFavoriteIds(): number[] { if (typeof window === "undefined") return []; try { const value=localStorage.getItem(FAVORITES_KEY); return value ? JSON.parse(value) : []; } catch { return []; } }
export function saveFavoriteIds(ids: number[]) { localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)); window.dispatchEvent(new Event(FAVORITES_EVENT)); }