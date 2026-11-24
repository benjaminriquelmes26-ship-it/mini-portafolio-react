
import type { Proyecto } from "../data/proyectos";

interface Props {
  proyecto: Proyecto;
}

function TarjetaProyecto({ proyecto }: Props) {
  return (
    <article className="tarjeta-proyecto">

      <div className="imagen-proyecto" aria-hidden="true">
        <svg
          width="65"
          height="65"
          viewBox="0 0 100 100"
        >
          <rect
            width="100"
            height="100"
            rx="8"
            fill="#b5c3d2"
          />
          <circle
            cx="72"
            cy="27"
            r="12"
            fill="#8294a8"
          />
          <path
            d="M10 85 L35 40 L55 65 L72 48 L92 85 Z"
            fill="#8294a8"
          />
        </svg>
      </div>

      <div className="informacion-proyecto">
        <h2>{proyecto.titulo}</h2>

        <p>{proyecto.descripcion}</p>

        <div className="tecnologias-proyecto">
          <strong>Tecnologías:</strong>

          {proyecto.tecnologias.map((tecnologia) => (
            <span key={tecnologia} className="tecnologia">
              {tecnologia}
            </span>
          ))}
        </div>
      </div>

    </article>
  );
}

export default TarjetaProyecto;
