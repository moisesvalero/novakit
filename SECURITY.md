# Política de seguridad

Este repositorio es una **landing estática de portfolio**. No procesa datos sensibles de usuarios ni expone endpoints propios.

## Alcance

| Incluido                                            | Fuera de alcance                                          |
| --------------------------------------------------- | --------------------------------------------------------- |
| Código en `src/`, `static/`, configuración de build | Infraestructura de Vercel (cuenta del mantenedor)         |
| Dependencias npm declaradas en `package.json`       | Contenido servido por dominios de terceros (Spline, etc.) |

## Superficie de ataque reducida

- **Sin backend**: no hay formularios que envíen datos a servidores propios, sesiones ni secretos en runtime.
- **Sin variables de entorno obligatorias** en producción para esta demo.
- **`.env*` ignorado** en git (ver `.gitignore`).
- Enlaces externos con `rel="noopener noreferrer"` cuando abren en nueva pestaña.

## `{@html}` en Svelte

Algunos textos i18n incluyen HTML limitado (`<span>`, `<strong>`, `<br>`) renderizado con `{@html}`. El contenido proviene **únicamente** de `src/lib/i18n/*.json` en el repositorio, no de parámetros de URL ni input de usuario. No ampliar esto a datos dinámicos sin sanitizar.

## Terceros

- **Spline** (iframe en el hero): escena 3D embebida; revisa su [política de privacidad](https://spline.design/) si desactivas el iframe.
- **Vercel Analytics / Speed Insights**: métricas agregadas de visitas y rendimiento según la configuración de tu proyecto en Vercel.

## Dependencias

Ejecuta periódicamente:

```bash
npm audit
```

y actualiza `@sveltejs/kit` y el resto de dependencias directas cuando haya avisos relevantes.

## Reportar vulnerabilidades

Si encuentras un problema de seguridad en **este código**:

1. **No** abras un issue público con detalles explotables.
2. Escríbeme por [LinkedIn](https://www.linkedin.com/in/moisesvalero/) o abre un advisory privado en GitHub si el repo lo permite.

Responderé en un plazo razonable (objetivo: 7 días laborables).
