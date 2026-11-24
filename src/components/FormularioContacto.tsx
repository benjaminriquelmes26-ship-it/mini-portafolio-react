
import { useState, type FormEvent } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errores, setErrores] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nuevosErrores = {
      nombre: "",
      correo: "",
      mensaje: "",
    };

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (correo.trim() === "") {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      nuevosErrores.correo = "Ingresa un correo válido";
    }

    if (mensaje.trim() === "") {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    }

    setErrores(nuevosErrores);

    if (
      nuevosErrores.nombre ||
      nuevosErrores.correo ||
      nuevosErrores.mensaje
    ) {
      setEnviado(false);
      return;
    }

    setEnviado(true);

    setNombre("");
    setCorreo("");
    setMensaje("");
  }

  return (
    <form className="formulario-contacto" onSubmit={manejarEnvio} noValidate>
      <label htmlFor="nombre">Nombre *</label>
      <input
        id="nombre"
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        aria-invalid={Boolean(errores.nombre)}
      />
      {errores.nombre && <p>{errores.nombre}</p>}

      <label htmlFor="correo">Correo electrónico *</label>
      <input
        id="correo"
        type="email"
        placeholder="tu@email.com"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        aria-invalid={Boolean(errores.correo)}
      />
      {errores.correo && <p>{errores.correo}</p>}

      <label htmlFor="mensaje">Mensaje *</label>
      <textarea
        id="mensaje"
        placeholder="Escribe tu mensaje aquí..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        aria-invalid={Boolean(errores.mensaje)}
      />
      {errores.mensaje && <p>{errores.mensaje}</p>}

      <button type="submit">Enviar mensaje</button>

      {enviado && (
        <p>¡Tu mensaje ha sido enviado correctamente!</p>
      )}
    </form>
  );
}

export default FormularioContacto;
