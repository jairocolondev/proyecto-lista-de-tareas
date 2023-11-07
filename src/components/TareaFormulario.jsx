import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import "../styles/TareaFormulario.css";

const TareaFormulario = (props) => {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Hubo un error...",
        text: "Debes escribir una Tarea para poderla agregar",
        confirmButtonColor: "#3085d6",
        position: "bottom-end",
      });
    } else {
      const tareaNueva = {
        id: uuidv4(),
        texto: input,
        completada: false,
        fechaCreacion: new Date().toISOString(),
        fechaCompletado: null,
      };

      props.onSubmit(tareaNueva);
      setInput("");

      Swal.fire({
        icon: "success",
        title: "¡Tarea agregada!",
        showConfirmButton: false,
        position: "bottom-end",
        timer: 2000,
      });
    }
  };

  return (
    <form action="" className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Escribe una tarea"
        name="texto"
        value={input}
        onChange={manejarCambio}
      />
      <button type="submit" className="tarea-button">
        Agregar Tarea
      </button>
    </form>
  );
};

TareaFormulario.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TareaFormulario;
