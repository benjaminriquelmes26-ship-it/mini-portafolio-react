
import { proyectos } from "../data/proyectos";
import TarjetaProyecto from "../components/TarjetaProyecto";

function Proyectos() {
  return (
    <section className="pagina-proyectos">
      <h1>Mis Proyectos</h1>

      <p>
        Algunos de los proyectos en los que he trabajado
        durante mi formación académica.
      </p>

      <div className="lista-proyectos">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.titulo}
            proyecto={proyecto}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
