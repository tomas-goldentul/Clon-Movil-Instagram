## 🎨 Diseño de Referencia (Figma)

El desarrollo visual y estructural de la interfaz de usuario está basado en el siguiente recurso de la comunidad:

<p align="center">
  <a href="https://www.figma.com/community/file/874574625832268971" target="_blank">
    <img src="https://img.shields.io/badge/Figma-Community_File-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Ver UI Kit en Figma" />
  </a>
</p>

### 📱 Capturas de la Interfaz

<p align="center">
  <img width="288" alt="Instagram Feed" src="https://github.com/user-attachments/assets/f3f33089-7734-4568-b1cf-92711b8f7fe8" style="margin-right: 15px;" />
  <img width="288" alt="Instagram Profile" src="https://github.com/user-attachments/assets/714985f1-8479-4f61-a62d-1d6b2b5bf7a2" />
</p>

## 📁 Jerarquía de Archivos

```text
Clon-Movil-Instagram/
├── assets/                       # Imágenes de la aplicación
├── src/                          # Carpeta principal
│   ├── components/               # Componentes reutilizables
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Historia.js
│   │   ├── historiasContainer.js
│   │   ├── Loading.js
│   │   ├── perfil.js
│   │   ├── PostCard.js
│   │   ├── publicacion.js
│   │   ├── publicacionDetail.js
│   │   └── SplashScreen.js
│   ├── navigation/                # Configuración de rutas
│   │   └── AppNavigator.js
│   └── services/                  # Configuración de los llamados a la API
│       └── api.js                 # Peticiones a la API
└── App.js                         # Punto de inicio de la aplicación
```

## ⚙️ Funcionalidad de Componentes


* **`Header.js`**
  * **Funcionalidad:** Contiene accesos rápidos para cámara, televisión y mensajes.
* **`Footer.js`**
  * **Funcionalidad:** Contiene pestañas pestañas (Home, Search, Create, Heart, Profile).
* **`Loading.js`**
  * **Funcionalidad:** Recibe los props `color`, `tamaño` y `backgroundColor`, lo que permite usar el mismo componente en pantallas con fondos claros como oscuros.

### 2. Componentes del Feed de Datos (`src/components/`)

* **`Historia.js`**
  * **Funcionalidad:** Tiene una lista `FlatList` que muestra las historias.
* **`historiasContainer.js`**
  * **Funcionalidad:** Ensambla de manera ordenada el `Header`, la sección de `Stories` y el feed dinámico de publicaciones en una sola vista unificada.
* **`publicacion.js`**
  * **Funcionalidad:** Se Conecta con la `api.js` para consumir datos de la API. Recibe la prop `navigation` desde publicacionDetail para poder ver en detalle la publicacion
* **`publicacionDetail.js`**
  * **Funcionalidad:** Vista expandida de una publicación específica, además simula de forma reactiva la interacción del botón "Like". Recibe la informacion de una publicacion  `publicacion.js`. Obtiene la `imagen`, el `id` y  `breeds`.

* **`perfil.js`**
  * **Funcionalidad:** Visualización del perfil, se pueden ver detalles de la cuenta (seguidores, seguidos, posts) y consume imágenes de la API.
