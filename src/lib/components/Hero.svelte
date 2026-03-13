<script lang="ts">
  import { onMount } from 'svelte';

  let heroLoaded = $state(false);

  onMount(() => {
    const id = requestAnimationFrame(() => {
      heroLoaded = true;
    });

    return () => cancelAnimationFrame(id);
  });
</script>

<section class="hero" class:hero-loaded={heroLoaded}>
  <div class="hero-bg">
    <iframe
      src="https://my.spline.design/interactiveaiwebsite-4kvHSstoxbqWFDKp11RVJkCe/"
      loading="lazy"
      title="NovaKit 3D Hero"
    ></iframe>
  </div>

  <div class="hero-inner">
    <div class="copy">
      <div class="pill hero-assemble hero-pill">
        NovaKit · Creative UI Toolkit
      </div>
      <h1 class="hero-assemble hero-title">
        Creative UI Toolkit<br />
        <span>for Modern Web Apps</span>
      </h1>
      <p class="subtitle hero-assemble hero-subtitle">
        Diseña y construye interfaces limpias, rápidas y elegantes con un diseño premium y una experiencia moderna.
      </p>
      <div class="actions hero-assemble hero-actions">
        <a class="btn-primary" href="#pricing">Get NovaKit</a>
        <a class="btn-secondary" href="#components">Explore components</a>
      </div>
      <p class="footnote hero-assemble hero-footnote">
        No templates genéricos. Secciones de producto modernas listas para
        combinar, animar y llevar a producción.
      </p>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 6rem 1.5rem 5rem;
    background: #ffffff;
    overflow: hidden;
    min-height: 100vh;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }

  .hero-bg iframe {
    width: 109%;
    height: 109%;
    border: none;
    display: block;
    transform: translate(0%, -7%);
    transform-origin: center;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 4rem;
    align-items: center;
    pointer-events: none;
  }

  .copy {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
    max-width: 640px;
    pointer-events: auto;
  }

  .subtitle,
  .footnote {
    max-width: 34rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.25rem 0.8rem;
    border-radius: 999px;
    font-size: 0.75rem;
    background: rgba(99, 102, 241, 0.08);
    color: var(--accent);
    border: 1px solid rgba(99, 102, 241, 0.25);
  }

  .hero-assemble {
    opacity: 0;
    transform: translate3d(var(--hero-x, 0), var(--hero-y, 70px), 0)
      rotate(var(--hero-rotate, 0deg)) scale(var(--hero-scale, 0.75));
    filter: blur(5px);
    transition:
      opacity 1s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 1.15s cubic-bezier(0.34, 1.56, 0.64, 1),
      filter 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
      text-shadow 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity, filter;
  }

  .hero-pill {
    --hero-y: 56px;
    --hero-x: -24px;
    --hero-rotate: -8deg;
    --hero-scale: 0.68;
    transition-delay: 90ms;
  }

  .hero-title {
    --hero-y: 88px;
    --hero-x: -10px;
    --hero-rotate: 4deg;
    --hero-scale: 0.72;
    transition-delay: 170ms;
  }

  .hero-subtitle {
    --hero-y: 74px;
    --hero-x: 10px;
    --hero-rotate: -2deg;
    --hero-scale: 0.78;
    transition-delay: 260ms;
  }

  .hero-actions {
    --hero-y: 64px;
    --hero-x: -14px;
    --hero-rotate: 2deg;
    --hero-scale: 0.8;
    transition-delay: 340ms;
  }

  .hero-footnote {
    --hero-y: 52px;
    --hero-x: 14px;
    --hero-rotate: -1deg;
    --hero-scale: 0.84;
    transition-delay: 430ms;
  }

  .hero-loaded .hero-assemble {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
    filter: blur(0);
  }

  .hero-loaded .hero-title {
    text-shadow: 0 24px 70px rgba(15, 23, 42, 0.2);
  }

  h1 {
    font-size: clamp(2.7rem, 5vw, 3.8rem);
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: -0.04em;
    color: var(--text-main);
  }

  h1 span {
    color: var(--text-secondary);
    font-weight: 400;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 32rem;
    line-height: 1.7;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
  }

  .btn-primary {
    background: var(--accent);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
    display: inline-block;
  }

  .btn-primary:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }

  .btn-secondary {
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    color: var(--text-main);
    background: var(--bg-soft);
    transition: background 0.2s ease;
    display: inline-block;
  }

  .btn-secondary:hover {
    background: #f0f1f3;
  }

  .footnote {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }

  @media (max-width: 900px) {
    .hero {
      padding: 4rem 1.5rem;
      min-height: auto;
    }

    .hero-inner {
      grid-template-columns: minmax(0, 1fr);
      justify-content: center;
      text-align: center;
    }

    .copy {
      align-items: center;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(26px);
      -webkit-backdrop-filter: blur(26px);
      border-radius: 24px;
      padding: 1.75rem 1.5rem;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    }

    .subtitle,
    .footnote {
      max-width: 100%;
    }

  }
</style>

