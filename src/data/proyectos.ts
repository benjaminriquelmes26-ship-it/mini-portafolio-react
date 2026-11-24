
export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
}

export const proyectos: Proyecto[] = [
  {
    titulo: "Calculadora de límites",
    descripcion:
      "Proyecto de Cálculo Básico. Programa en Python que resuelve límites matemáticos. Aprendí a traducir un procedimiento matemático a lógica de programación.",
    tecnologias: ["Python"],
  },
  {
    titulo: "Portafolio web",
    descripcion:
      "Esta misma página, construida con HTML semántico y CSS responsivo. Aprendí a diseñar pensando en el usuario y en la accesibilidad.",
    tecnologias: ["HTML5", "CSS3", "Git", "GitHub"],
  },
  {
    titulo: "Videojuego en Python",
    descripcion:
      "Juego desarrollado el semestre pasado con la librería pygame. Aprendí a manejar eventos, ciclos de juego y organización del código.",
    tecnologias: ["Python", "Pygame"],
  },
];
