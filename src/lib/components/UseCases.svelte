<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n/index.js';
</script>

<section class="use-cases" id="use-cases">
  <div class="header" use:reveal={{ stage: 'title' }}>
    <p class="eyebrow">{$t('useCases.eyebrow')}</p>
    <h2>{$t('useCases.title')}</h2>
  </div>

  <div class="grid">
    <article class="case motion-card" use:reveal={{ stage: 'content', delay: 140 }}>
      <h3>{$t('useCases.case1Title')}</h3>
      <p>
        {$t('useCases.case1Desc')}
      </p>
    </article>

    <article class="case motion-card" use:reveal={{ stage: 'content', delay: 190 }}>
      <h3>{$t('useCases.case2Title')}</h3>
      <p>
        {$t('useCases.case2Desc')}
      </p>
    </article>

    <article class="case motion-card" use:reveal={{ stage: 'content', delay: 240 }}>
      <h3>{$t('useCases.case3Title')}</h3>
      <p>
        {$t('useCases.case3Desc')}
      </p>
    </article>

    <article class="case motion-card" use:reveal={{ stage: 'content', delay: 290 }}>
      <h3>{$t('useCases.case4Title')}</h3>
      <p>
        {$t('useCases.case4Desc')}
      </p>
    </article>
  </div>
</section>

<style>
  .use-cases {
    padding: 4.5rem 1.5rem 4rem;
    background-color: var(--bg-soft);
  }

  .header {
    max-width: 720px;
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
    font-size: clamp(1.9rem, 3vw, 2.4rem);
    letter-spacing: -0.04em;
    color: var(--text-main);
  }

  .grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .case {
    border-radius: 20px;
    background: white;
    border: 1px solid rgba(15, 23, 42, 0.04);
    padding: 1.5rem 1.6rem;
    position: relative;
    overflow: hidden;
    transition:
      transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-color 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .case h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--text-main);
  }

  .case p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  /* Profundidad en hover: la tarjeta "sube" en Z */
  .case.is-visible:hover {
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.24);
    border-color: rgba(99, 102, 241, 0.45);
    transform: translateX(0) translateY(-4px);
    z-index: 2;
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (min-width: 1600px) {
    .use-cases {
      padding-block: 5rem 4.8rem;
    }

    .header {
      max-width: 840px;
      margin-bottom: 3rem;
    }

    .grid {
      max-width: 1320px;
      gap: 1.5rem;
    }
  }
</style>

