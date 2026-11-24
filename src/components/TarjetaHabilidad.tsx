interface TarjetaHabilidadProps {
  nombre: string
  nivel: number
  icono: string
}

function TarjetaHabilidad({ nombre, nivel, icono }: TarjetaHabilidadProps) {
  return (
    <div className="tarjeta-habilidad">
      <span className="habilidad-icono">{icono}</span>
      <h4>{nombre}</h4>
      <div className="barra">
        <div className="barra-relleno" style={{ width: `${nivel}%` }} />
      </div>
      <span className="habilidad-nivel">{nivel}%</span>
    </div>
  )
}

export default TarjetaHabilidad