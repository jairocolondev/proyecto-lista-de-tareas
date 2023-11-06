import imagenListaDeTareas from "./assets/imagenListaDeTareas.jpg";

function App() {
  return (
    <>
      <div className="container-aplicacion-tareas">
        <div className="imagenListaDeTareas">
          <img
            src={imagenListaDeTareas}
            alt="Imagen Lista de tareas con React"
          />
        </div>
        <div className="tareas-listas-principal">
          <h1>Mis Tareas</h1>
        </div>
      </div>
    </>
  );
}

export default App;
