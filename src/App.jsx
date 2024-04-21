import Footer from "./components/footer";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <>
      <div className="container-aplicacion-tareas">
        <div className="imagenListaDeTareas"></div>
        <div className="tareas-listas-principal">
          <ListaDeTareas />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
