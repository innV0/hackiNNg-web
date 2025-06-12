
export const downloadProjectTemplate = () => {
  const templateContent = `
# Documento de Trabajo del Proyecto - Sesión de Trabajo de IA

## Equipo
| Nombre | Rol | E-mail |
|--------|-----|--------|
| [Nombre del miembro 1] | [Rol del miembro 1] | [Email del miembro 1] |
| [Nombre del miembro 2] | [Rol del miembro 2] | [Email del miembro 2] |
| [Nombre del miembro 3] | [Rol del miembro 3] | [Email del miembro 3] |

## Modelo de negocio

### Cliente
Descripción detallada del cliente objetivo.

### Problema
Descripción clara del problema, necesidad o deseo que se está resolviendo y su impacto en el cliente.

### Solución
Descripción de la solución propuesta. ¿Qué herramientas de IA utiliza y cómo? ¿Qué valor aportan?

### Propuesta de valor
Beneficios únicos que ofrece la solución y por qué el cliente la elegiría sobre otras.

## Anexos
Espacio para investigación de mercado, análisis de competencia, material de apoyo, etc.

---

## Estructura del Pitch (4 minutos)

1. **Introducción (20 segundos):** Saludo y resumen del problema que abordáis.
2. **Descripción del problema (1 minuto):** ¿Quién es vuestro cliente y qué problema tiene?
3. **Descripción de la solución (2 minutos):** Explicad cómo funciona vuestra solución, las tecnologías de IA utilizadas, la propuesta de valor y, si es posible, mostrad una demo.
4. **Plan (30 segundos):** Mencionad los próximos pasos o posibles mejoras.
5. **Conclusión (30 segundos):** Resumid los puntos clave de vuestro proyecto.

---

Documento generado por hackiNNg.guide
`;

  const blob = new Blob([templateContent], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'plantilla-proyecto-sesion-trabajo.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
