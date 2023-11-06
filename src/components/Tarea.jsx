import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/Tarea.css";

const Tarea = ({
  id,
  texto,
  completada,
  fechaCreacion,
  fechaCompletado,
  completarTarea,
  eliminarTarea,
}) => {
  const formatFecha = (fecha) => {
    const formattedDate = fecha
      ? new Date(fecha).toLocaleDateString("es-CO", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";
    return formattedDate;
  };

  return (
    <div className="tarea-container-general">
      <div
        className={
          completada ? "tarea-container completada" : "tarea-container"
        }
      >
        <div className="tarea-texto" onClick={() => completarTarea(id)}>
          {texto}
        </div>
        <div
          className="tarea-container-iconos"
          onClick={() => eliminarTarea(id)}
        >
          <AiOutlineCloseCircle className="tarea-icono-close" />
        </div>
      </div>
      <div
        className={
          completada ? "fecha-container completada" : "fecha-container"
        }
      >
        <div className="texto-tarea-fecha-creacion">
          <strong>Creada el:</strong> {formatFecha(fechaCreacion)}
        </div>
        {completada && (
          <div className="texto-tarea-fecha-completada">
            <strong>Completada el:</strong> {formatFecha(fechaCompletado)}
          </div>
        )}
      </div>
    </div>
  );
};

Tarea.propTypes = {
  id: PropTypes.string,
  texto: PropTypes.string,
  completada: PropTypes.bool,
  fechaCreacion: PropTypes.string,
  fechaCompletado: PropTypes.string,
  completarTarea: PropTypes.func,
  eliminarTarea: PropTypes.func,
};

export default Tarea;
