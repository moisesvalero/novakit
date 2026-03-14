<script lang="ts">
  import { reveal } from '$lib/reveal';
</script>

<section class="gallery" id="components">
  <div class="header" use:reveal={{ stage: 'title' }}>
    <p class="eyebrow">A kit, not just a template</p>
    <h2>Craft full product experiences with ready‑made UI blocks.</h2>
    <p class="subtitle">
      Swap sections, tweak tokens, and keep everything on‑brand without
      touching a design tool every single time.
    </p>
  </div>

  <div class="grid">
    <article class="tile hero-tile motion-card" use:reveal={{ stage: 'content', delay: 140 }}>
      <div class="tile-top">
        <div class="hero-bar"></div>
        <div class="hero-pill"></div>
      </div>
      <div class="tile-bottom">
        <h3>Hero layouts</h3>
        <p>Above‑the‑fold compositions optimised for SaaS, tools, and dashboards.</p>
      </div>
    </article>

    <article class="tile pricing-tile motion-card" use:reveal={{ stage: 'content', delay: 200 }}>
      <div class="pricing-cards">
        <div class="pricing-pill"></div>
        <div class="pricing-row"></div>
        <div class="pricing-row short"></div>
      </div>
      <h3>Pricing stacks</h3>
      <p>Opinionated pricing sections with toggles, badges, and CTAs.</p>
    </article>

    <article class="tile onboarding-tile motion-card" use:reveal={{ stage: 'content', delay: 170 }}>
      <div class="steps">
        <div class="step-dot"></div>
        <div class="step-line"></div>
        <div class="step-dot"></div>
        <div class="step-line"></div>
        <div class="step-dot"></div>
      </div>
      <h3>Onboarding flows</h3>
      <p>Step‑by‑step layouts for signup, import, and activation.</p>
    </article>

    <article class="tile interactions-tile motion-card" use:reveal={{ stage: 'content', delay: 230 }}>
      <div class="cursor-demo">
        <div class="cursor-dot"></div>
        <div class="cursor-ring"></div>
      </div>
      <h3>Interacciones listas</h3>
      <p>Hovers, focos y micro‑interacciones pensadas para sentirse fluidas.</p>
    </article>

    <article class="tile wide metrics-tile motion-card" use:reveal={{ stage: 'content', delay: 290 }}>
      <div class="metrics-row">
        <div class="metric-bar big"></div>
        <div class="metric-bar"></div>
        <div class="metric-bar"></div>
      </div>
      <h3>Dashboards & metrics</h3>
      <p>Cards, stat blocks, and activity feeds ready for real product data.</p>
    </article>

    <article class="tile states-tile motion-card" use:reveal={{ stage: 'content', delay: 350 }}>
      <div class="states-row">
        <span class="state-pill success">Success</span>
        <span class="state-pill warning">Pending</span>
      </div>
      <h3>UI states resueltos</h3>
      <p>Mensajes de éxito, error y vacíos tratados como componentes de verdad.</p>
    </article>

    <article class="tile layout-tile motion-card" use:reveal={{ stage: 'content', delay: 320 }}>
      <div class="columns-demo">
        <div class="col-block tall"></div>
        <div class="col-block"></div>
      </div>
      <h3>Layouts listos para grid</h3>
      <p>Columnas y secciones responsivas pensadas para productos complejos.</p>
    </article>
  </div>
</section>

<style>
  .gallery {
    padding: 5rem 1.5rem 4rem;
    background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.04), transparent 60%);
  }

  .header {
    max-width: 800px;
    margin: 0 auto 2.5rem;
    text-align: center;
  }

  .eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    letter-spacing: -0.04em;
    color: var(--text-main);
    margin-bottom: 1rem;
  }

  .subtitle {
    max-width: 32rem;
    margin: 0 auto;
    font-size: 0.96rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .tile {
    border-radius: 24px;
    border: 1px solid rgba(15, 23, 42, 0.06);
    background: linear-gradient(
      135deg,
      rgba(249, 250, 251, 1),
      rgba(255, 255, 255, 1)
    );
    padding: 1.5rem 1.6rem;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.03);
    position: relative;
    overflow: hidden;
    transition:
      opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-color 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
      background-color 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, box-shadow, opacity;
  }

  .tile.large {
    grid-column: span 2;
  }

  .tile.wide {
    grid-column: span 2;
  }

  .tile h3 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    color: var(--text-main);
  }

  .tile p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .tile.is-visible:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 24px 65px rgba(15, 23, 42, 0.15),
      0 0 0 1px rgba(129, 140, 248, 0.35);
    border-color: rgba(99, 102, 241, 0.55);
  }

  .hero-tile .tile-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .hero-bar {
    width: 55%;
    height: 14px;
    border-radius: 999px;
    background: #e5e7eb;
  }

  .hero-pill {
    width: 26%;
    height: 24px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--accent), var(--accent-hover));
    opacity: 0.9;
    animation: hero-pill 6s ease-in-out infinite;
  }

  .hero-tile .tile-bottom {
    margin-top: 0.4rem;
  }

  .pricing-cards {
    margin-bottom: 0.7rem;
    padding: 0.6rem;
    border-radius: 18px;
    background: rgba(249, 250, 251, 0.9);
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .pricing-pill {
    width: 50%;
    height: 14px;
    border-radius: 999px;
    background: rgba(99, 102, 241, 0.18);
  }

  .pricing-row {
    width: 100%;
    height: 8px;
    border-radius: 999px;
    background: #e5e7eb;
  }

  .pricing-row.short {
    width: 70%;
  }

  .onboarding-tile .steps {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .step-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--accent);
  }

  .step-line {
    flex: 1;
    height: 3px;
    border-radius: 999px;
    background: #e5e7eb;
    position: relative;
    overflow: hidden;
  }

  .step-line::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 40%;
    background: linear-gradient(90deg, var(--accent), var(--accent-hover));
    animation: progress 5s linear infinite;
  }

  .metrics-tile .metrics-row {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .metric-bar {
    flex: 1;
    height: 28px;
    border-radius: 999px;
    background: #e5e7eb;
  }

  .metric-bar.big {
    height: 44px;
    background: linear-gradient(135deg, #e0e7ff, #eef2ff);
  }

  .states-tile .states-row {
    display: inline-flex;
    gap: 0.4rem;
    padding: 0.25rem 0.4rem;
    border-radius: 999px;
    background: rgba(249, 250, 251, 0.9);
    margin-bottom: 0.8rem;
  }

  .state-pill {
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 500;
    color: #065f46;
    background: rgba(16, 185, 129, 0.14);
  }

  .state-pill.warning {
    color: #92400e;
    background: rgba(251, 191, 36, 0.22);
  }

  .layout-tile .columns-demo {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }

  .col-block {
    border-radius: 18px;
    background: #e5e7eb;
    height: 40px;
  }

  .col-block.tall {
    height: 64px;
    background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  }

  .interactions-tile .cursor-demo {
    position: relative;
    height: 56px;
    margin-bottom: 0.8rem;
    border-radius: 20px;
    background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.18), transparent 60%);
    overflow: hidden;
  }

  .cursor-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: white;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.8);
  }

  .cursor-ring {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 999px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    animation: cursor-pulse 2.2s ease-out infinite;
  }

  @keyframes cursor-pulse {
    0% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(0.4);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.6);
    }
  }

  @keyframes hero-pill {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-6px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes progress {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(150%);
    }
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .tile.large,
    .tile.wide {
      grid-column: span 2;
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .tile.large,
    .tile.wide {
      grid-column: span 1;
    }
  }

  @media (min-width: 1600px) {
    .gallery {
      padding-block: 5.8rem 4.8rem;
    }

    .header {
      max-width: 920px;
      margin-bottom: 3rem;
    }

    .grid {
      max-width: 1320px;
      gap: 1.5rem;
    }
  }
</style>

