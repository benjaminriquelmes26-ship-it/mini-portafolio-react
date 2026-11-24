import { Link } from 'react-router-dom'

const destacados = [
  { icono: '</>', titulo: 'Desarrollo Frontend' },
  { icono: '🖥️', titulo: 'Proyectos Reales' },
  { icono: '👥', titulo: 'Aprendizaje Continuo' },
  { icono: '★', titulo: 'Compromiso y Pasión' },
]

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <h1>Hola, soy Benjamin Riquelme</h1>
          <h2>Desarrollador Frontend</h2>
          <p>
            Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí,
            mis habilidades y proyectos.
          </p>
          <Link to="/sobre-mi" className="boton">
            Explorar
          </Link>
        </div>
        <div className="hero-imagen">
          <div className="imagen-placeholder">Tu foto</div>
        </div>
      </section>

      <section className="destacados">
        {destacados.map((item) => (
          <div key={item.titulo} className="destacado">
            <span className="destacado-icono">{item.icono}</span>
            <p>{item.titulo}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Inicio