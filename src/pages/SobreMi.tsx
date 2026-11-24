
function SobreMi() {
  return (
    <section className="pagina-sobre-mi">

      <div className="sobre-mi">
        <div className="imagen-placeholder">
          Tu foto
        </div>

        <div className="sobre-mi-texto">
          <h1>Sobre mí</h1>

          <p>
            Soy Benjamin Riquelme, estudiante de Ingeniería Civil
            en Informática. Me gusta mucho el tema del desarrollo
            web y me interesa crear páginas web que ayuden a las
            distintas personas.
          </p>
        </div>
      </div>

      <div className="sobre-mi-detalles">

        <div className="bloque-sobre-mi">
          <h2>¿Qué estudio?</h2>
          <p>
            Estudio Ingeniería Civil en Informática en la
            Universidad Católica de Temuco.
          </p>
        </div>

        <div className="bloque-sobre-mi">
          <h2>¿Qué me interesa?</h2>
          <ul>
            <li>Desarrollo web y tecnologías frontend</li>
            <li>Aprender nuevas herramientas y frameworks</li>
            <li>Construir proyectos que generen un impacto real</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default SobreMi;
    