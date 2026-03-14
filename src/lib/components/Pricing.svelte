<script lang="ts">
  import { reveal } from '$lib/reveal';

  const { isYearly, toggleBilling } = $props<{
    isYearly: boolean;
    toggleBilling: () => void;
  }>();
</script>

<section id="pricing" class="pricing">
  <div class="pricing-header" use:reveal={{ stage: 'title' }}>
    <h2>Simple, Transparent Pricing</h2>
    <p>Escoge el plan que mejor se adapte a tu equipo.</p>
    <div class="toggle-container">
      <span class:active={!isYearly}>Monthly</span>
      <button
        type="button"
        class="toggle-btn"
        onclick={toggleBilling}
        aria-label="Toggle billing"
      >
        <div class="toggle-circle" class:yearly={isYearly}></div>
      </button>
      <span class:active={isYearly}>
        Yearly <mark>-20%</mark>
      </span>
    </div>
  </div>

  <div class="pricing-grid">
    <div class="price-card" use:reveal={{ stage: 'content', delay: 150 }}>
      <div class="plan-info">
        <h3>Starter</h3>
        <p>Perfecto para side projects y MVPs rápidos.</p>
      </div>
      <div class="price-display">
        <span class="currency">$</span>
        <span class="amount">{isYearly ? '19' : '24'}</span>
        <span class="period">/{isYearly ? 'yr' : 'mo'}</span>
      </div>
      <ul class="features-list">
        <li>✓ 10 proyectos activos</li>
        <li>✓ Acceso a layouts base</li>
        <li>✓ Actualizaciones mensuales</li>
      </ul>
      <button type="button" class="btn-primary full-width">Start with Starter</button>
    </div>

    <div class="price-card featured" use:reveal={{ stage: 'content', delay: 230 }}>
      <div class="plan-info">
        <h3>Pro</h3>
        <p>El paquete ideal para productos en producción.</p>
      </div>
      <div class="price-display">
        <span class="currency">$</span>
        <span class="amount">{isYearly ? '39' : '49'}</span>
        <span class="period">/{isYearly ? 'yr' : 'mo'}</span>
      </div>
      <ul class="features-list">
        <li>✓ Unlimited Projects</li>
        <li>✓ Premium Components</li>
        <li>✓ 24/7 Priority Support</li>
      </ul>
      <button type="button" class="btn-primary full-width">Get Pro</button>
    </div>

    <div class="price-card" use:reveal={{ stage: 'content', delay: 190 }}>
      <div class="plan-info">
        <h3>Teams</h3>
        <p>Equipos de producto que necesitan mover rápido en varios proyectos.</p>
      </div>
      <div class="price-display">
        <span class="currency">$</span>
        <span class="amount">{isYearly ? '79' : '99'}</span>
        <span class="period">/{isYearly ? 'yr' : 'mo'}</span>
      </div>
      <ul class="features-list">
        <li>✓ Hasta 10 seats</li>
        <li>✓ Design tokens compartidos</li>
        <li>✓ Soporte prioritario dedicado</li>
      </ul>
      <button type="button" class="btn-primary full-width">Talk to sales</button>
    </div>
  </div>
</section>

<style>
  .pricing {
    padding: 6rem 1.5rem;
    text-align: center;
  }

  .pricing-header h2 {
    font-size: clamp(2rem, 6vw, 3rem);
    letter-spacing: -0.04em;
    margin-bottom: 1rem;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    font-weight: 500;
  }

  .toggle-container span {
    color: var(--text-secondary);
    transition: color 0.3s;
  }

  .toggle-container span.active {
    color: var(--text-main);
    font-weight: 700;
  }

  .toggle-container mark {
    background: #eef2ff;
    color: var(--accent);
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .toggle-btn {
    width: 58px;
    height: 34px;
    min-height: 44px;
    background: var(--text-main);
    border-radius: 50px;
    border: none;
    cursor: pointer;
    position: relative;
    padding: 4px;
    display: flex;
    align-items: center;
  }

  .toggle-circle {
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .toggle-circle.yearly {
    transform: translateX(26px);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    margin-top: 4rem;
    align-items: stretch;
    max-width: 1280px;
    margin-inline: auto;
  }

  .price-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 3rem;
    border-radius: 32px;
    text-align: left;
    display: flex;
    flex-direction: column;
    transition:
      opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
      transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
      box-shadow 0.35s var(--ease-out-soft),
      border-color 0.35s var(--ease-out-soft);
  }

  /* Pro un poco más alto para destacar */
  .price-card.featured.is-visible {
    transform: translateY(-4px);
  }

  .price-card:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
    transform: translateY(-6px);
  }

  .price-card.featured {
    border-color: rgba(99, 102, 241, 0.4);
    background: radial-gradient(circle at top, #eef2ff, #ffffff);
    position: relative;
    overflow: hidden;
  }

  /* Glow respirando en el borde del plan Pro */
  .price-card.featured::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.45), transparent 55%);
    opacity: 0.0;
    pointer-events: none;
    mix-blend-mode: soft-light;
    animation: pro-glow 5s ease-in-out infinite alternate;
  }

  .plan-info {
    min-height: 124px;
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 0.7rem;
  }

  .plan-info p {
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .price-display {
    margin: 2rem 0;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.05em;
  }

  .price-display .currency {
    font-size: 1.5rem;
    vertical-align: super;
    color: var(--text-secondary);
  }

  /* Efecto blur-fade al cambiar precios */
  .price-display .amount,
  .price-display .period {
    display: inline-block;
    transition:
      opacity 0.35s ease-out,
      transform 0.35s ease-out,
      filter 0.35s ease-out;
  }

  .pricing.toggling .amount,
  .pricing.toggling .period {
    opacity: 0;
    transform: translateY(-8px);
    filter: blur(3px);
  }

  .pricing.toggling-done .amount,
  .pricing.toggling-done .period {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  .price-display .period {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text-secondary);
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin-bottom: 2.5rem;
  }

  .features-list li {
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  .full-width {
    display: block;
    width: 100%;
    text-align: center;
  }

  /* Botones con desplazamiento de gradiente interno al hover */
  .price-card .btn-primary {
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent-hover) 50%, var(--accent) 100%);
    background-size: 200% 100%;
    color: #fff;
    border-radius: 14px;
    padding: 0.95rem 1.2rem;
    margin-top: auto;
    -webkit-appearance: none;
    appearance: none;
    transition:
      background-position 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.26s var(--ease-soft-bounce),
      box-shadow 0.26s var(--ease-soft-bounce);
  }

  .price-card .btn-primary:hover {
    background-position: 100% 0;
  }

  @keyframes pro-glow {
    0% {
      opacity: 0.0;
    }
    50% {
      opacity: 0.45;
    }
    100% {
      opacity: 0.2;
    }
  }

  @media (max-width: 900px) {
    .pricing-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .pricing {
      padding: 4.5rem 1rem;
    }

    .toggle-container {
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .price-card {
      padding: 2rem 1.2rem;
    }

    .plan-info {
      min-height: auto;
    }

    .pricing-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (min-width: 1600px) {
    .pricing {
      padding-block: 7rem;
      max-width: 1440px;
      margin-inline: auto;
    }

    .pricing-grid {
      max-width: 1360px;
      gap: 1.8rem;
    }
  }
</style>