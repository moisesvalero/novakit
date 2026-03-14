<script lang="ts">
  import { reveal } from '$lib/reveal';
</script>

<section class="social-proof">
  <div class="inner">
    <p class="eyebrow" use:reveal={{ stage: 'title' }}>Trusted by modern product teams</p>
    <div class="logos">
      <span use:reveal={{ stage: 'content', delay: 80 }}>Superflow</span>
      <span use:reveal={{ stage: 'content', delay: 140 }}>Pixelforge</span>
      <span use:reveal={{ stage: 'content', delay: 200 }}>UI Studio</span>
      <span use:reveal={{ stage: 'content', delay: 260 }}>Brightlabs</span>
    </div>
    <div class="stats">
      <div class="stat" use:reveal={{ stage: 'content', delay: 320 }}>
        <span class="value">50+</span>
        <span class="label">Premium components</span>
      </div>
      <div class="stat" use:reveal={{ stage: 'content', delay: 380 }}>
        <span class="value">3x</span>
        <span class="label">Faster delivery</span>
      </div>
      <div class="stat" use:reveal={{ stage: 'content', delay: 440 }}>
        <span class="value">24/7</span>
        <span class="label">Priority support</span>
      </div>
    </div>
  </div>
</section>

<style>
  .social-proof {
    padding: 2rem 1.5rem 4rem;
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, 0.06);
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.03),
      rgba(15, 23, 42, 0.01)
    );
    padding: 1.25rem 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
  }

  .eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-secondary);
    flex: 1 1 160px;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex: 2 1 260px;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .logos span {
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, 0.06);
    background-color: rgba(255, 255, 255, 0.9);
    transition: border-color 0.35s var(--ease-out-soft), background-color 0.35s var(--ease-out-soft);
  }

  .stats {
    display: flex;
    gap: 1.5rem;
    flex: 1 1 220px;
    justify-content: flex-end;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .value {
    font-weight: 600;
    font-size: 1rem;
    color: var(--text-main);
  }

  .label {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  @media (max-width: 800px) {
    .inner {
      border-radius: 24px;
      padding: 1.25rem 1.25rem;
    }

    .stats {
      justify-content: flex-start;
    }
  }

  @media (min-width: 1600px) {
    .social-proof {
      padding-block: 2.5rem 4.5rem;
    }

    .inner {
      max-width: 1360px;
      padding: 1.4rem 2.4rem;
      gap: 2rem;
    }
  }
</style>

