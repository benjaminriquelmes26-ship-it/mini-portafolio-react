
interface TarjetaHabilidadProps {
  nombre: string;
  nivel: number;
  icono: string;
}

function TarjetaHabilidad({
  nombre,
  nivel,
  icono,
}: TarjetaHabilidadProps) {

  const iconos: Record<string, string> = {
    HTML: "5",
    CSS: "3",
    JavaScript: "JS",
    React: "⚛",
    TypeScript: "TS",
    Python: "🐍",
  };

  const simbolo = iconos[nombre] || icono;

  return (
    <article className="tarjeta-habilidad">

      <div className="habilidad-icono" aria-hidden="true">
        {simbolo}
      </div>

      <h4>{nombre}</h4>

      <div
        className="barra"
        role="progressbar"
        aria-label={`Nivel de ${nombre}`}
        aria-valuenow={nivel}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="barra-relleno"
          style={{ width: `${nivel}%` }}
        />
      </div>

      <div className="habilidad-porcentaje">
        {nivel}%
      </div>

    </article>
  );
}

export default TarjetaHabilidad;
