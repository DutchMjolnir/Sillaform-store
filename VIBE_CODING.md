# Bitácora de Vibe Coding

## Idea del proyecto

Quise hacer una tienda sencilla de sillas ergonómicas. La temática permite trabajar con catálogo, filtros, detalle de producto y favoritos sin convertir la práctica en un sistema de pagos o inventario real.

La meta fue avanzar por partes. Primero definí la estructura, después los datos y al final agregué la interacción y revisé los errores.

## Prompts utilizados

### 1. Crear la base

> Quiero iniciar una aplicación llamada SillaForma con Next.js 16, App Router, TypeScript y Tailwind. Usa una carpeta `src` y el alias `@/*`. Déjame primero la estructura básica; no agregues toda la tienda en este paso.

Revisé que el proyecto tuviera scripts para desarrollo, lint y build.

### 2. Organizar la aplicación

> La aplicación será un catálogo de sillas ergonómicas. Necesito inicio, catálogo, detalle de una silla, favoritos y una página informativa. También necesito una API interna. Separa páginas, componentes, datos, tipos y funciones auxiliares. No pongas toda la lógica dentro de un solo `page.tsx`.

La decisión fue usar `src/app`, `src/components`, `src/data`, `src/lib` y `src/types`.

### 3. Preparar los productos

> Crea un tipo TypeScript para las sillas. Cada producto debe tener id, nombre, descripción, categoría, precio, calificación, stock, características y si aparece como destacado. Agrega diez productos repartidos entre oficina, gaming, ejecutiva y compacta. No uses `any`.

Revisé que todos los productos cumplieran el mismo tipo y que las categorías no fueran textos abiertos.

### 4. Crear la API

> Crea un Route Handler en `/api/chairs` que devuelva las sillas en JSON. Debe aceptar una búsqueda por nombre y un filtro por categoría mediante parámetros de la URL. Si algo falla, responde con un mensaje sencillo y estado 500. Usa los datos locales.

Elegí una API interna para no depender de claves ni servicios externos durante la presentación.

### 5. Diseñar la navegación

> Agrega un header, navegación móvil y footer. Quiero una apariencia sobria, con fondo claro, verde oscuro y un acento terracota. La navegación móvil puede usar estado, pero no conviertas todo el layout en Client Component.

La interacción quedó aislada en el header.

### 6. Construir el catálogo

> En `/chairs`, consume la API interna. Agrega búsqueda, filtro por categoría, opción de mostrar solo disponibles y un botón para limpiar. Usa `useState` y `useEffect`. Muestra un estado de carga y un mensaje útil si ocurre un error o no hay resultados.

Probé búsquedas, categorías y el producto agotado.

### 7. Mejorar los filtros

> Haz que la búsqueda no distinga entre mayúsculas, minúsculas ni tildes. Evita volver a filtrar si no cambió la información. No cambies el diseño.

Se normalizaron los textos y se utilizó `useMemo` para la lista calculada.

### 8. Agregar el detalle

> Crea `/chairs/[id]` como Server Component. Muestra nombre, precio, descripción, stock, calificación y características. Si el id no existe, usa `notFound()` y crea una vista para regresar al catálogo.

La ruta dinámica no necesitó hooks de cliente.

### 9. Guardar favoritos

> Agrega un botón para guardar una silla en favoritos con `localStorage`. Usa `useState` y `useEffect` porque el almacenamiento no existe durante el render del servidor. Crea `/favorites` y muestra un estado vacío cuando no haya productos guardados.

### 10. Corregir la sincronización

> Al quitar un favorito, la página no siempre cambia de inmediato. Corrige la sincronización sin instalar una librería. Usa un evento del navegador y mantén la lectura y escritura en un solo archivo.

La solución usa un evento personalizado y también escucha `storage`.

### 11. Estados de interfaz

> Agrega `loading.tsx`, `error.tsx` y `not-found.tsx`. El error debe tener un botón para volver a intentar. El loading debe parecerse al espacio que ocuparán las tarjetas.

### 12. Revisión de calidad

> Revisa imports sin uso, `any`, problemas de hidratación, componentes demasiado grandes, etiquetas de formularios, foco de teclado y separación entre Server y Client Components. No desactives reglas de ESLint para ocultar errores.

## Iteraciones y decisiones

- La primera idea era cargar todo directamente desde el archivo de datos. Se cambió para consumir `/api/chairs` en el catálogo y demostrar integración mediante Route Handler.
- Los favoritos inicialmente solo se actualizaban al recargar. Se agregó un evento personalizado para sincronizar componentes.
- Se evitó convertir páginas enteras en Client Components. Los hooks están en navegación, filtros y favoritos.
- Se usaron ilustraciones abstractas en lugar de imágenes remotas para evitar enlaces rotos y configuración adicional.
- El proyecto no incluye pagos ni autenticación porque esos flujos no aportaban a los requisitos de la tarea.

## Desafíos

El principal reto fue mantener la separación entre servidor y cliente. También fue necesario validar que la API devolviera una colección antes de guardarla en estado y evitar que una solicitud cancelada apareciera como error.

## Validaciones finales

- Next.js 16 con App Router.
- TypeScript estricto.
- Cinco rutas de interfaz y una API interna.
- Server Components y Client Components.
- `useState`, `useEffect` y `useMemo`.
- Loading, error y not found.
- Diseño responsive.
- `.env.example` y README.
- Lint y build ejecutados antes de preparar la entrega.

## Reflexión

La IA permitió avanzar rápido con la estructura y los componentes, pero los mejores resultados aparecieron cuando cada prompt tenía un objetivo pequeño y una restricción clara. La revisión siguió siendo necesaria para detectar lógica repetida, dependencias innecesarias y componentes que no debían ejecutarse en el cliente.
