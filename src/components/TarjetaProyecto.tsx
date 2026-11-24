
import type { Proyecto } from "../data/proyectos";

interface Props {
  proyecto: Proyecto;
}

function TarjetaProyecto({ proyecto }: Props) {
  return (
    <article className="tarjeta-proyecto">
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
    </article>
  );
}

export default TarjetaProyecto;
