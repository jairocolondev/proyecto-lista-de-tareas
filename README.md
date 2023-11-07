# Aplicación de Lista de Tareas con React y Vite

![image](https://github.com/jairocolondev/proyecto-lista-de-tareas/assets/83477127/f4ae44da-175d-42e4-9827-b24974c3e945)


Este proyecto es una aplicación de lista de tareas desarrollada con React y Vite. Permite a los usuarios agregar, completar y eliminar tareas de una lista. La aplicación también usa `localStorage` para mantener las tareas persistentes entre las sesiones del navegador.

## Características

- Agregar nuevas tareas a la lista
- Marcar tareas como completadas
- Eliminar tareas de la lista
- Almacenamiento local de tareas
- Notificaciones visuales con SweetAlert2
- Fecha y hora de creación y de completado de tareas
- Uso de UUID para identificación única de tareas
- Validación de formularios
- Uso de React Hooks (useState, useEffect)
- Iconos con `react-icons`

## Tecnologías Utilizadas

- React.js
- Vite
- SweetAlert2
- UUID
- PropTypes
- React Icons
- CSS3

## Estructura del Proyecto

El proyecto consiste en los siguientes componentes y archivos:

- `App.jsx`: Componente principal que renderiza la aplicación de lista de tareas.
- `components/ListaDeTareas.jsx`: Renderiza la lista de tareas y maneja la lógica del estado.
- `components/TareaFormulario.jsx`: Formulario para ingresar nuevas tareas.
- `components/Tarea.jsx`: Cada tarea individual con opciones para completar y eliminar.
- `styles/`: Directorio que contiene todos los archivos CSS para estilizar la aplicación.
- `assets/`: Almacena los archivos estáticos como imágenes.

## Instalación

Para ejecutar este proyecto localmente, necesitarás tener Node.js instalado en tu sistema. Una vez instalado, sigue estos pasos:

1. Clona el repositorio:
git clone https://github.com/jairocolondev/proyecto-lista-de-tareas

2. Navega al directorio del proyecto:
cd nombre-de-tu-proyecto

3.Instala las dependencias:
npm install

4. Ejecuta el proyecto:
npm run dev

Nota: La aplicación debería estar disponible en http://localhost:5173 o en el puerto que se muestre en tu terminal.

Uso
Para agregar una tarea, ingresa el texto en el campo de texto y haz clic en "Agregar Tarea".
Para marcar una tarea como completada, haz clic en el texto de la tarea.
Para eliminar una tarea, haz clic en el icono de eliminar al lado de la tarea.
Contribuir
Si deseas contribuir al proyecto, sigue estos pasos:

Haz fork del repositorio.
Crea una nueva rama (git checkout -b feature/tu-nueva-feature).
Haz tus cambios y añade tus commits (git commit -am 'Añadir algunos cambios').
Empuja a la rama (git push origin feature/tu-nueva-feature).
Crea una nueva Pull Request.
Licencia
Este proyecto está abierto al público para uso y modificación. Sin embargo, por favor, da créditos al autor original si usas partes significativas del código.

© [Jairo Colón, Creative Design](https://jairocolon.com) | Creado con React + Vite


