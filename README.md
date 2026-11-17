# SillaForma

SillaForma es una aplicación demostrativa de comercio electrónico para explorar sillas ergonómicas. Fue creada con Next.js 16, TypeScript, App Router y Tailwind CSS como proyecto académico de Vibe Coding.

## Funcionalidades

- Inicio con productos destacados.
- Catálogo con búsqueda, categoría y disponibilidad.
- Detalle dinámico para cada silla.
- Favoritos persistentes mediante `localStorage`.
- API interna con Route Handler.
- Estados de carga, error y recurso no encontrado.
- Navegación responsive para móvil y escritorio.

## Rutas

- `/`
- `/chairs`
- `/chairs/[id]`
- `/favorites`
- `/about`
- `/api/chairs`

La API acepta filtros opcionales:

- `/api/chairs?search=atria`
- `/api/chairs?category=Oficina`

## Requisitos

- Node.js 20.9 o superior. Se recomienda Node.js 22.
- npm 10 o superior.

## Instalación

```text
npm install
cp .env.example .env.local
npm run dev
```

Abrir `http://localhost:3000`.

## Validación

```text
npm run lint
npm run build
npm start
```

## Variable de entorno

```text
NEXT_PUBLIC_APP_NAME=SillaForma
```

## Ejecución y entrega

La aplicación fue validada localmente mediante:

```text
npm run lint
npm run build
npm run dev

Para esta entrega académica, el código fuente y la documentación del proceso se encuentran en este repositorio. No se requiere un despliegue público.

La bitácora completa está disponible en VIBE_CODING.md.