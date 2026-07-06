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
├── assets/                     # Imágenes de la aplicación 
├── src/                        # Carpeta principal 
│   ├── components/             # Componentes  reutilizables
│   │   ├── Footer.js         
│   │   ├── Header.js           
│   │   ├── Historia.js        
│   │   ├── historiasContainer.js
│   │   ├── Loading.js         
│   │   ├── perfil.js         
│   │   └── SplashScreen.js     
│   └── services/               # Configuracion de los llamados a la API
│       └── api.js              # Peticiones a la API
└── App.js                      # Punto de inicio de la aplicación 
