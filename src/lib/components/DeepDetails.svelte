<script lang="ts">
  import { reveal } from '$lib/reveal';
</script>

<section class="deep-details" id="details">
  <div class="inner">
    <header class="header" use:reveal={{ stage: 'title' }}>
      <p class="eyebrow">Details that matter for product UI.</p>
      <h2>Move seamlessly from idea to shipped interface.</h2>
      <p class="subtitle">
        NovaKit cuida los pequeños detalles de tus pantallas: estados, espacios,
        ritmo visual y accesibilidad.
      </p>
    </header>

    <div class="marquee" use:reveal={{ stage: 'content', delay: 150 }}>
      <ul class="list">
        <li>
          <span class="text">Real‑time ready layouts para dashboards colaborativos.</span>
          <span class="tag">Dashboards listos para production</span>
        </li>
        <li>
          <span class="text">Repeatable sections para pricing, onboarding y anuncios in‑product.</span>
          <span class="tag">Reutiliza sin perder personalidad</span>
        </li>
        <li>
          <span class="text">Offline‑friendly patterns para apps que no pueden fallar.</span>
          <span class="tag">Pensado para condiciones reales</span>
        </li>
        <li>
          <span class="text">Widget‑like cards listas para métricas, activity feeds y más.</span>
          <span class="tag">Bloques que parecen producto</span>
        </li>
        <li>
          <span class="text">Nested layouts pensados para vistas complejas sin perder claridad.</span>
          <span class="tag">Complejo por dentro, claro por fuera</span>
        </li>
        <li>
          <span class="text">TypeScript y Svelte 5 runes para una DX moderna.</span>
          <span class="tag">DX y diseño al mismo nivel</span>
        </li>
        <li>
          <span class="text">Integraciones limpias con APIs REST y GraphQL.</span>
          <span class="tag">Conecta tus datos en minutos</span>
        </li>
        <li>
          <span class="text">Estados de carga, error y vacío coherentes en toda la app.</span>
          <span class="tag">Nunca más pantallas rotas</span>
        </li>
        <li>
          <span class="text">Animaciones suaves, sin sacrificar rendimiento.</span>
          <span class="tag">Motion pensado para producto</span>
        </li>
        <li>
          <span class="text">Accesibilidad cuidada: foco visible, contraste y roles semánticos.</span>
          <span class="tag">Bonito, pero también usable</span>
        </li>

        <li>
          <span class="text">Plantillas de emails transaccionales alineadas con tu UI de producto.</span>
          <span class="tag">Experiencia consistente end‑to‑end</span>
        </li>
        <li>
          <span class="text">Componentes pensados para dark mode sin reescribir todo el tema.</span>
          <span class="tag">Un solo kit, dos modos</span>
        </li>
        <li>
          <span class="text">Patrones de navegación listos para apps con muchos equipos y espacios.</span>
          <span class="tag">Escala sin perderte</span>
        </li>
        <li>
          <span class="text">Layouts para páginas vacías que invitan a la acción, no a cerrar la pestaña.</span>
          <span class="tag">Vacíos que inspiran</span>
        </li>
        <li>
          <span class="text">Microcopys sugeridos para CTAs, estados y tooltips de producto.</span>
          <span class="tag">Texto y diseño de la mano</span>
        </li>

        <!-- Duplicamos para efecto “créditos” continuo -->
        <li>
          <span class="text">Real‑time ready layouts para dashboards colaborativos.</span>
          <span class="tag">Dashboards listos para production</span>
        </li>
        <li>
          <span class="text">Repeatable sections para pricing, onboarding y anuncios in‑product.</span>
          <span class="tag">Reutiliza sin perder personalidad</span>
        </li>
        <li>
          <span class="text">Offline‑friendly patterns para apps que no pueden fallar.</span>
          <span class="tag">Pensado para condiciones reales</span>
        </li>
        <li>
          <span class="text">Widget‑like cards listas para métricas, activity feeds y más.</span>
          <span class="tag">Bloques que parecen producto</span>
        </li>
        <li>
          <span class="text">Nested layouts pensados para vistas complejas sin perder claridad.</span>
          <span class="tag">Complejo por dentro, claro por fuera</span>
        </li>
        <li>
          <span class="text">TypeScript y Svelte 5 runes para una DX moderna.</span>
          <span class="tag">DX y diseño al mismo nivel</span>
        </li>
        <li>
          <span class="text">Integraciones limpias con APIs REST y GraphQL.</span>
          <span class="tag">Conecta tus datos en minutos</span>
        </li>
        <li>
          <span class="text">Estados de carga, error y vacío coherentes en toda la app.</span>
          <span class="tag">Nunca más pantallas rotas</span>
        </li>
        <li>
          <span class="text">Animaciones suaves, sin sacrificar rendimiento.</span>
          <span class="tag">Motion pensado para producto</span>
        </li>
        <li>
          <span class="text">Accesibilidad cuidada: foco visible, contraste y roles semánticos.</span>
          <span class="tag">Bonito, pero también usable</span>
        </li>
        <li>
          <span class="text">Plantillas de emails transaccionales alineadas con tu UI de producto.</span>
          <span class="tag">Experiencia consistente end‑to‑end</span>
        </li>
        <li>
          <span class="text">Componentes pensados para dark mode sin reescribir todo el tema.</span>
          <span class="tag">Un solo kit, dos modos</span>
        </li>
        <li>
          <span class="text">Patrones de navegación listos para apps con muchos equipos y espacios.</span>
          <span class="tag">Escala sin perderte</span>
        </li>
        <li>
          <span class="text">Layouts para páginas vacías que invitan a la acción, no a cerrar la pestaña.</span>
          <span class="tag">Vacíos que inspiran</span>
        </li>
        <li>
          <span class="text">Microcopys sugeridos para CTAs, estados y tooltips de producto.</span>
          <span class="tag">Texto y diseño de la mano</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  .deep-details {
    padding: 5.5rem 1.5rem 5rem;
    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.06), #ffffff 55%);
    color: var(--text-main);
  }

  .inner {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }

  .header {
    margin-bottom: 2.5rem;
  }

  .eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: clamp(2.1rem, 3vw, 2.6rem);
    letter-spacing: -0.04em;
    color: var(--text-main);
    margin-bottom: 0.75rem;
  }

  .subtitle {
    font-size: 0.96rem;
    color: var(--text-secondary);
    max-width: 32rem;
    margin: 0 auto;
    line-height: 1.7;
  }

  .marquee {
    margin-top: 3rem;
    height: 440px;
    overflow-y: hidden;
    overflow-x: visible;
    position: relative;
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
    mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
    text-align: center;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    gap: 0.45rem;
    font-size: 1.1rem;
    font-weight: 600;
    animation: credits 18s linear infinite;
  }

  .list:active {
    animation-play-state: paused;
  }

  .list li {
    color: rgba(17, 24, 39, 0.45);
    transition: color 0.2s ease, transform 0.2s ease;
    display: block;
    position: relative;
    cursor: pointer;
  }

  .list li:nth-child(1),
  .list li:nth-child(2),
  .list li:nth-child(3) {
    color: rgba(17, 24, 39, 0.9);
  }

  .list li:hover .text {
    transform: translateY(-1px);
  }

  .text {
    transition: color 0.2s ease, transform 0.2s ease;
    display: inline-block;
    padding-right: 0.5rem;
  }

  .tag {
    position: absolute;
    top: 50%;
    right: -3rem;
    padding: 0.25rem 1.1rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #0f172a;
    background: rgba(255, 255, 255, 0.96);
    opacity: 0;
    transform: translateY(-50%) translateY(8px);
    transition: opacity 0.18s ease, transform 0.18s ease;
    white-space: nowrap;
  }

  .list li:hover .tag {
    opacity: 1;
    transform: translateY(0);
  }

  /* Colores por línea */
  .list li:nth-child(10n + 1):hover .text,
  .list li:nth-child(10n + 1):hover .tag {
    color: #312e81;
    background: rgba(129, 140, 248, 0.18);
  }

  .list li:nth-child(10n + 2):hover .text,
  .list li:nth-child(10n + 2):hover .tag {
    color: #1e3a8a;
    background: rgba(96, 165, 250, 0.24);
  }

  .list li:nth-child(10n + 3):hover .text,
  .list li:nth-child(10n + 3):hover .tag {
    color: #064e3b;
    background: rgba(52, 211, 153, 0.2);
  }

  .list li:nth-child(10n + 4):hover .text,
  .list li:nth-child(10n + 4):hover .tag {
    color: #92400e;
    background: rgba(251, 191, 36, 0.26);
  }

  .list li:nth-child(10n + 5):hover .text,
  .list li:nth-child(10n + 5):hover .tag {
    color: #7c2d12;
    background: rgba(248, 113, 113, 0.26);
  }

  .list li:nth-child(10n + 6):hover .text,
  .list li:nth-child(10n + 6):hover .tag {
    color: #1d4ed8;
    background: rgba(129, 140, 248, 0.26);
  }

  .list li:nth-child(10n + 7):hover .text,
  .list li:nth-child(10n + 7):hover .tag {
    color: #0369a1;
    background: rgba(56, 189, 248, 0.26);
  }

  .list li:nth-child(10n + 8):hover .text,
  .list li:nth-child(10n + 8):hover .tag {
    color: #4c1d95;
    background: rgba(192, 132, 252, 0.26);
  }

  .list li:nth-child(10n + 9):hover .text,
  .list li:nth-child(10n + 9):hover .tag {
    color: #15803d;
    background: rgba(74, 222, 128, 0.24);
  }

  .list li:nth-child(10n + 10):hover .text,
  .list li:nth-child(10n + 10):hover .tag {
    color: #0f172a;
    background: rgba(148, 163, 184, 0.24);
  }

  @keyframes credits {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
</style>

