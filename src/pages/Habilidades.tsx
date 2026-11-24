
import TarjetaHabilidad from "../components/TarjetaHabilidad";
import { habilidades, herramientas } from "../data/habilidades";

function Habilidades() {
  return (
    <section className="habilidades">
      <h1>Habilidades y Lenguajes</h1>

      <h3 className="titulo-seccion">Tecnologías</h3>

      <div className="grilla-habilidades">
        {habilidades.map((habilidad) => (
          <TarjetaHabilidad
            key={habilidad.nombre}
            nombre={habilidad.nombre}
            nivel={habilidad.nivel}
            icono={habilidad.icono}
          />
        ))}
      </div>

      <h3 className="titulo-seccion titulo-herramientas">
        Herramientas
      </h3>

      <div className="chips">
        {herramientas.map((herramienta) => (
          <span key={herramienta} className="chip">
            {herramienta}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
