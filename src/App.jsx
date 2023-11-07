import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <>
      <div className="container-aplicacion-tareas">
        <div className="imagenListaDeTareas"></div>
        <div className="tareas-listas-principal">
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
      <footer className="footer">
        <p className="parrafoFooter">
          © {new Date().getFullYear()} | Creado por{" "}
          <a
            className="linkJairoColon"
            href="https://jairocolon.com"
            target="_blank"
            rel="noreferrer"
          >
            Jairo Colón, Creative Design
          </a>{" "}
          con React + Vite
        </p>
      </footer>
    </>
  );
}

export default App;
