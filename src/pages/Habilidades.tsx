import TarjetaHabilidad from '../components/TarjetaHabilidad'
import { habilidades, herramientas } from '../data/habilidades'

function Habilidades() {
  return (
    <section className="habilidades">
      <h1>Habilidades y Lenguajes</h1>

      <h3>Tecnologías</h3>
      <div className="grilla-habilidades">
        {habilidades.map((h) => (
          <TarjetaHabilidad
            key={h.nombre}
            nombre={h.nombre}
            nivel={h.nivel}
            icono={h.icono}
          />
        ))}
      </div>

      <h3>Herramientas</h3>
      <div className="chips">
        {herramientas.map((herramienta) => (
          <span key={herramienta} className="chip">
            {herramienta}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Habilidades