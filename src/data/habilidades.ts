export interface Habilidad {
  nombre: string
  nivel: number
  icono: string
}

export const habilidades: Habilidad[] = [
  { nombre: 'HTML', nivel: 85, icono: '🟧' },
  { nombre: 'CSS', nivel: 85, icono: '🟦' },
  { nombre: 'JavaScript', nivel: 75, icono: '🟨' },
  { nombre: 'React', nivel: 60, icono: '⚛️' },
  { nombre: 'TypeScript', nivel: 60, icono: '🔷' },
  { nombre: 'Python', nivel: 70, icono: '🐍' },
]

export const herramientas: string[] = [
  'Git',
  'GitHub',
  'VS Code',
  'Figma',
  'Node.js',
]