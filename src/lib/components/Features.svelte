<script lang="ts">
  import { reveal } from '$lib/reveal';
</script>

<section id="features" class="features">
  <h2 class="title" use:reveal={{ stage: 'title' }}>Designed for Modern Interfaces</h2>
  <div class="grid">
    <div class="feature" use:reveal={{ stage: 'content', delay: 130, distance: 52 }}>
      <div class="icon">✨</div>
      <h3><span class="title-text">Clean Components</span></h3>
      <p>Construye interfaces limpias y modernas con componentes simples y reutilizables.</p>
    </div>
    <div class="feature" use:reveal={{ stage: 'content', delay: 220, distance: 52 }}>
      <div class="icon">⚡</div>
      <h3><span class="title-text">Fast by Default</span></h3>
      <p>Svelte compila tu código para que tu web sea ultra rápida sin esfuerzo.</p>
    </div>
    <div class="feature" use:reveal={{ stage: 'content', delay: 310, distance: 52 }}>
      <div class="icon">🎨</div>
      <h3><span class="title-text">Premium Design</span></h3>
      <p>Estilo minimalista, tipografía grande y microanimaciones suaves.</p>
    </div>
  </div>
</section>

<style>
  .features {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 1.5rem;
  }

  .title {
    font-size: clamp(2rem, 5.6vw, 2.5rem);
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
    gap: 2rem;
  }

  .feature {
    background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.04), var(--bg-soft));
    padding: 3rem 2rem;
    border-radius: 24px;
    transition:
      opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
      transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
      box-shadow 0.4s var(--ease-out-soft),
      border-color 0.4s var(--ease-out-soft);
    position: relative;
    overflow: hidden;
  }

  .feature:nth-child(1) {
    --assembly-x: -24px;
    --assembly-rotate: -5deg;
    --assembly-scale-from: 0.88;
  }

  .feature:nth-child(2) {
    --assembly-x: 0px;
    --assembly-rotate: 0deg;
    --assembly-scale-from: 0.9;
  }

  .feature:nth-child(3) {
    --assembly-x: 24px;
    --assembly-rotate: 5deg;
    --assembly-scale-from: 0.88;
  }

  .icon {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    background: radial-gradient(circle at top, #eef2ff, #e0e7ff);
    transform: scale(0.8) rotate(-10deg);
    opacity: 0.8;
    transition:
      transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s var(--ease-out-soft);
    box-shadow: 0 0 0 0 rgba(129, 140, 248, 0.0);
  }

  .feature:global(.is-visible) .icon {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 0 0 0 8px rgba(129, 140, 248, 0.08);
  }

  .feature:global(.is-visible) .icon:hover {
    transform: scale(1.05) rotate(3deg);
  }

  /* Títulos con masked reveal */
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    color: var(--text-main);
    overflow: hidden;
  }

  .title-text {
    display: inline-block;
    transform: translateY(110%);
    transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .feature:global(.is-visible) .title-text {
    transform: translateY(0%);
  }

  /* Border beam en hover */
  .feature::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background:
      conic-gradient(
        from 0deg,
        transparent 0deg,
        rgba(129, 140, 248, 0.8) 60deg,
        transparent 120deg,
        transparent 360deg
      );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transform: rotate(0deg);
    transition:
      opacity 0.4s ease-out,
      transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    pointer-events: none;
  }

  .feature:global(.is-visible):hover::before {
    opacity: 1;
    transform: rotate(360deg);
  }

  @media (max-width: 640px) {
    .features {
      margin: 3.4rem auto;
      padding: 0 1rem;
    }

    .grid {
      gap: 1rem;
    }

    .feature {
      padding: 1.3rem 1.1rem;
    }
  }

  @media (min-width: 1600px) {
    .features {
      max-width: 1320px;
      margin: 5rem auto;
    }

    .grid {
      gap: 2.2rem;
    }
  }
</style>

