import { NavLink } from 'react-router-dom'

const enlaces = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/sobre-mi', texto: 'Sobre mí' },
  { ruta: '/habilidades', texto: 'Habilidades' },
  { ruta: '/proyectos', texto: 'Proyectos' },
  { ruta: '/contacto', texto: 'Contacto' },
]

function Header() {
  return (
    <header className="header">
      <span className="logo">MiPortafolio</span>
      <nav className="nav">
        {enlaces.map((enlace) => (
          <NavLink
            key={enlace.ruta}
            to={enlace.ruta}
            end={enlace.ruta === '/'}
            className={({ isActive }) => (isActive ? 'enlace activo' : 'enlace')}
          >
            {enlace.texto}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header