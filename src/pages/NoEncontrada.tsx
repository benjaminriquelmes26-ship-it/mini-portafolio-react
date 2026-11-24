import { Link } from 'react-router-dom'

function NoEncontrada() {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default NoEncontrada