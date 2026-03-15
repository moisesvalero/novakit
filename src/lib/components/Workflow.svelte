<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n/index.js';
</script>

<section class="workflow" id="how-it-works">
  <div class="inner">
    <div class="copy" use:reveal={{ stage: 'title' }}>
      <p class="eyebrow">{$t('workflow.eyebrow')}</p>
      <h2>{$t('workflow.title')}</h2>
      <p class="subtitle">
        {$t('workflow.subtitle')}
      </p>
    </div>

    <div class="steps" use:reveal={{ stage: 'content', delay: 120 }}>
      <div class="connector" aria-hidden="true">
        <span class="line"></span>
        <span class="dot"></span>
      </div>

      <article class="step" use:reveal={{ stage: 'content', delay: 170 }}>
        <span class="badge">01</span>
        <div class="icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M5 6.5h14M5 12h14M5 17.5h8" />
          </svg>
        </div>
        <h3>{$t('workflow.steps.designTitle')}</h3>
        <p>{$t('workflow.steps.designDesc')}</p>
      </article>

      <article class="step" use:reveal={{ stage: 'content', delay: 250 }}>
        <span class="badge">02</span>
        <div class="icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M7 7h10v10H7zM4 20h16" />
          </svg>
        </div>
        <h3>{$t('workflow.steps.buildTitle')}</h3>
        <p>{$t('workflow.steps.buildDesc')}</p>
      </article>

      <article class="step" use:reveal={{ stage: 'content', delay: 330 }}>
        <span class="badge">03</span>
        <div class="icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M6 12l4 4 8-8M4 20h16" />
          </svg>
        </div>
        <h3>{$t('workflow.steps.shipTitle')}</h3>
        <p>{$t('workflow.steps.shipDesc')}</p>
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.1rem;
    position: relative;
    padding-top: 0.5rem;
  }

  .connector {
    position: absolute;
    top: 2.8rem;
    left: 10%;
    right: 10%;
    height: 2px;
    pointer-events: none;
    z-index: 0;
  }

  .line {
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(99, 102, 241, 0.25), rgba(99, 102, 241, 0.65), rgba(99, 102, 241, 0.25));
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.14);
    transform: translateY(-50%);
    animation: slide 2s infinite linear;
  }

  .step {
    padding: 1.4rem 1rem 1.1rem;
    border-radius: 18px;
    border: 1px solid rgba(15, 23, 42, 0.06);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.03);
    position: relative;
    overflow: hidden;
    text-align: center;
    z-index: 1;
    transition: opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
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

  .icon-wrap {
    width: 2.2rem;
    height: 2.2rem;
    margin: 0 auto 0.65rem;
    border-radius: 999px;
    background: rgba(99, 102, 241, 0.1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-wrap svg {
    width: 16px;
    height: 16px;
    stroke: var(--accent);
    stroke-width: 1.8;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
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
    margin-bottom: 0.55rem;
  }

  h3 {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
    color: var(--text-main);
  }

  .step p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.55;
  }

  .step:hover {
    box-shadow: 0 22px 55px rgba(15, 23, 42, 0.09);
    transform: translateY(-2px) translateX(0);
  }

  @keyframes slide {
    0% {
      left: 0;
    }
    100% {
      left: calc(100% - 10px);
    }
  }

  @media (max-width: 900px) {
    .inner {
      grid-template-columns: minmax(0, 1fr);
    }

    .steps {
      grid-template-columns: minmax(0, 1fr);
      gap: 0.9rem;
    }

    .connector {
      display: none;
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

