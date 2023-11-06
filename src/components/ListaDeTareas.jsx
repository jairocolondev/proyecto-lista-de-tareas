import { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import Swal from "sweetalert2";
import "../styles/ListaDeTareas.css";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);

    Swal.fire({
      icon: "success",
      title: "Tarea eliminada",
      text: "La tarea ha sido eliminada correctamente.",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        const estadoCompletado = !tarea.completada;
        Swal.fire({
          icon: "success",
          title: estadoCompletado ? "Tarea completada" : "Tarea no completada",
          text: `La tarea ha sido ${
            estadoCompletado ? "completada" : "marcada como no completada"
          } correctamente.`,
          showConfirmButton: false,
          timer: 2000,
        });
        return {
          ...tarea,
          completada: estadoCompletado,
          fechaCompletado: estadoCompletado ? new Date().toISOString() : null,
        };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-container">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            fechaCreacion={new Date().toISOString()}
            fechaCompletado={
              tarea.fechaCompletado ? tarea.fechaCompletado : null
            }
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
