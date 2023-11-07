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
      const nuevaTarea = {
        ...tarea,
        fechaCreacion: tarea.fechaCreacion
          ? tarea.fechaCreacion
          : new Date().toISOString(),
        completada: false,
      };
      const tareasActualizadas = [nuevaTarea, ...tareas];
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
      position: "bottom-end",
      timer: 2000,
    });
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
        tarea.fechaCompletado = tarea.completada
          ? new Date().toISOString()
          : null;
        Swal.fire({
          icon: "success",
          title: tarea.completada ? "Tarea completada" : "Tarea no completada",
          text: `La tarea ha sido ${
            tarea.completada ? "completada" : "marcada como no completada"
          } correctamente.`,
          showConfirmButton: false,
          position: "bottom-end",
          timer: 2000,
        });
      }
      return tarea;
    });

    // Dividir tareas entre completadas y no completadas
    const tareasNoCompletadas = tareasActualizadas.filter(
      (tarea) => !tarea.completada
    );
    const tareasCompletadas = tareasActualizadas.filter(
      (tarea) => tarea.completada
    );

    // Unir primero las no completadas y luego las completadas
    setTareas([...tareasNoCompletadas, ...tareasCompletadas]);
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
            fechaCreacion={tarea.fechaCreacion}
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
