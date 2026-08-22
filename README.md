# Angular Bodoquin

Proyecto Angular generado con Angular CLI 16.2.16.

Node.js usado en este entorno: v16.20.2.

## Arquitectura Actual

La aplicación sigue una estructura modular básica con una capa principal (`AppModule`) y una carpeta de páginas (`pages`) para separar vistas por dominio.

### Vista General

```text
angular-bodoquin/
├─ src/
│  ├─ main.ts
│  ├─ index.html
│  ├─ styles.scss
│  ├─ assets/
│  │  └─ css/
│  │     ├─ button.scss
│  │     ├─ input.scss
│  │     └─ table.scss
│  └─ app/
│     ├─ app.module.ts
│     ├─ app-routing.module.ts
│     ├─ app.component.ts
│     ├─ app.component.html
│     ├─ app.component.scss
│     ├─ pages/
│     │  ├─ page1/
│     │  │  ├─ page1.component.ts
│     │  │  ├─ page1.component.html
│     │  │  ├─ page1.component.scss
│     │  │  └─ page1.module.ts
│     │  └─ pages2/
│     │     ├─ page2.component.ts
│     │     ├─ page2.component.html
│     │     ├─ page2.component.scss
│     │     ├─ page2.module.ts
│     │     └─ interfaces
│     └─ shared/
│        ├─ components/
│        ├─ interfaces/
│        └─ services/
├─ angular.json
└─ package.json
```

### Capas y Responsabilidades

- `src/main.ts`: Punto de entrada de Angular.
- `src/app/app.module.ts`: Módulo raíz, declara `AppComponent` e importa `AppRoutingModule`.
- `src/app/app-routing.module.ts`: Configuración central de rutas (actualmente sin rutas declaradas).
- `src/app/pages/`: Organización por páginas o features.
- `src/app/shared/`: Espacio para componentes, interfaces y servicios reutilizables.
- `src/assets/css/`: Estilos globales por tipo de UI (botones, inputs y tablas).

### Estado Actual de Implementación

- La estructura de carpetas para escalar por módulos/páginas ya existe.
- Hay archivos vacíos en páginas (`page1.module.ts`, `page2.module.ts`, `page1.component.ts`, `page2.component.ts`) que indican arquitectura preparada pero aún en construcción.
- `AppComponent` actualmente renderiza contenido estático en su plantilla.

## Comandos del Proyecto

- Desarrollo: `ng serve`
- Build: `ng build`
- Tests unitarios: `ng test`

### Generación de Código (`ng generate`)

- Comando base: `ng generate <schematic> <nombre>`
- Alias corto: `ng g <schematic> <nombre>`

Ejemplos recomendados para esta arquitectura:

- Componente de página: `ng g c app/pages/page1/nuevo-componente`
- Servicio reutilizable: `ng g s app/shared/services/nombre-servicio`
- Interface compartida: `ng g i app/shared/interfaces/nombre-interface`
- Módulo de feature: `ng g m app/pages/nueva-feature --routing`

## Próxima Evolución Recomendada

- Declarar rutas en `app-routing.module.ts` para navegar entre `page1` y `pages2`.
- Completar módulos y componentes de cada página.
- Mover lógica reutilizable a `shared/services` y contratos a `shared/interfaces`.

## Proyecto Bodoquin

### Aplicación venta de productos

#### Layout

- Header
  - Logo
  - Buscador
  - Carrito de Compras
- Menu lateral
- Main
  - Tarjetas de productos
- Footer

#### Funcional (NEW)

- Listar el catálogo de productos a ofrecer.
- Al seleccionar un producto se tiene que comunicar con el carrito de compras.
- El carrito de compras tiene que mostrar el resumen de productos seleccionados.
- El menu lateral tiene que tener los enlaces a las diferentes pages de productos.
- Implementar filtrado de productos por el buscador.

#### Técnica

- Frontend Angular 16
  - Componentes
  - Servicios
    - Para comunicar componentes
    - Para comunicarse con backend (NEW)
  - Interfaces
  - Module
  - Routing
  - Directivas
  - Ciclo de Vida componentes
  - Decoradores
  - Patrón Reactivo
- Backend simple (NEW)
  - Implementa servicios de backend (endpoint) para cada producto

#### Código fuente (OK)

- Repositorio GIT
  - Github
  - Clone (`git clone url_repositorio`)
  - Ramas (`git checkout -b rama`)
  - Commit (`git commit -m "..."`)
  - Push (`git push origin rama`)
  - Pull Request (Github Pull Request)

#### Gestión tareas (OK)

- Trello
  - Tablero canvas para la gestión de tareas

#### Gestión de proyectos (OK)

- Metodología
  - SCRUM (metodología ágil)
    - Planning (reunión de 1 día donde planificamos qué vamos a desarrollar durante el sprint)
    - Sprint (el periodo de 1 (o 2) semanas que dura el desarrollo de features)
    - Daily: Reunión diaria rápida para saber si van bien el desarrollo sin ningún bloqueante (20min) (Líder, Scrum Master)
    - Retrospectiva: (1 hora al día siguiente del fin del sprint) conversan de lo que se hizo bien o mal

#### Herramientas para coordinar (OK)

- Zoom
- Teams

### GIT (OK)

- `git remote -v` => para saber a que repositorio remoto estamos conectados
- `git remote add origin URL_REPOSITORIO_REMOTO` => para conectar nuestro repositorio local a un repositorio origin remoto
- `git config --global user.name "nombre_usuario"` => configurar el usuario que hace commit en tu local
- `git config --global user.email "nombre_usuario@correo.com"` => configurar el correo que hace commit en tu local
- `git checkout -b rama` => para crear una rama
- `git checkout rama` => para cambiarnos hacia otra rama
- `git push origin rama` => envía los cambios locales hacia la rama remota
- `git pull origin rama` => descargar los cambios del repositorio en nuestra rama local
- `git fetch` => sincroniza el repositorio remoto con el repositorio local
- `git commit "feat: [ID-TAREA] comentario"` => Estructura del mensaje del commit
- `feat` => Nuevas funcionalidades
- `fix` => Resolucion de bugs o errores
- `refactor` => Reestructurar o cambiar piezas de codigo


### Accesibilidad web
- titulo y descripcion
- colores y saturacion
- fuente y tamaño letra