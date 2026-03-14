<script lang="ts">
  import { reveal } from '$lib/reveal';
</script>

<section class="workflow" id="how-it-works">
  <div class="inner">
    <div class="copy" use:reveal={{ stage: 'title' }}>
      <p class="eyebrow">How NovaKit fits your flow</p>
      <h2>From wireframe to polished interface in hours, not weeks.</h2>
      <p class="subtitle">
        Combine ready‑made blocks, tweak tokens, and ship product‑ready UI kits
        without drowning in Figma files or CSS refactors.
      </p>
    </div>

    <div class="steps" use:reveal={{ stage: 'content', delay: 120 }}>
      <article class="step step-1" use:reveal={{ stage: 'content', delay: 170 }}>
        <span class="badge">01</span>
        <h3>Drop in the starter layout</h3>
        <p>
          Start from opinionated SvelteKit layouts that already solve navigation,
          spacing, and typography the way modern apps expect.
        </p>
      </article>

      <article class="step step-2" use:reveal={{ stage: 'content', delay: 250 }}>
        <span class="badge">02</span>
        <h3>Compose sections like building blocks</h3>
        <p>
          Mix hero, pricing, onboarding, and product sections as independent
          components instead of wrestling with one giant template.
        </p>
      </article>

      <article class="step step-3" use:reveal={{ stage: 'content', delay: 330 }}>
        <span class="badge">03</span>
        <h3>Ship with production‑ready motion</h3>
        <p>
          Use pre‑wired scroll reveals and hover states that stay smooth at
          60fps, even on lower‑end laptops and mobile devices.
        </p>
      </article>
    </div>
  </div>
</section>

<style>
  .workflow {
    padding: 6rem 1.5rem 4rem;
    background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.09), transparent 55%);
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.4fr);
    gap: 3.5rem;
    align-items: flex-start;
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
    margin-bottom: 1.25rem;
  }

  .subtitle {
    font-size: 0.98rem;
    color: var(--text-secondary);
    max-width: 32rem;
    line-height: 1.7;
  }

  .steps {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    position: relative;
    padding-top: 0.25rem;
  }

  .steps::before {
    content: "";
    position: absolute;
    top: 0.75rem;
    left: 1.5rem;
    right: 1.5rem;
    height: 1px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(148, 163, 184, 0.1), rgba(99, 102, 241, 0.5), rgba(148, 163, 184, 0.1));
    transform-origin: left;
    transform: scaleX(0);
    opacity: 0;
    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out;
  }

  .steps.is-visible::before {
    transform: scaleX(1);
    opacity: 1;
  }

  .step {
    padding: 1.4rem 1.5rem;
    border-radius: 18px;
    border: 1px solid rgba(15, 23, 42, 0.06);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.03);
    position: relative;
    overflow: hidden;
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.35s var(--ease-out-soft);
  }

  .step::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--accent), var(--accent-hover));
    opacity: 0.85;
  }

  .step > * {
    position: relative;
    z-index: 1;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 999px;
    background: rgba(99, 102, 241, 0.1);
    color: var(--accent);
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
    box-shadow: 0 0 0 0 rgba(129, 140, 248, 0.7);
  }

  .step.is-visible .badge {
    animation: badge-glow 0.9s ease-out 0.35s forwards;
  }

  h3 {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
    color: var(--text-main);
  }

  .step p {
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .step:hover {
    box-shadow: 0 22px 55px rgba(15, 23, 42, 0.09);
    transform: translateY(-2px) translateX(0);
  }

  @keyframes badge-glow {
    0% {
      box-shadow: 0 0 0 0 rgba(129, 140, 248, 0.0);
    }
    40% {
      box-shadow: 0 0 0 6px rgba(129, 140, 248, 0.35);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(129, 140, 248, 0.0);
    }
  }

  @media (max-width: 900px) {
    .inner {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (min-width: 1600px) {
    .workflow {
      padding-block: 7rem 5rem;
    }

    .inner {
      max-width: 1360px;
      gap: 4.2rem;
    }
  }
</style>

