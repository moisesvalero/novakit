<script lang="ts">
  import PhoneMockup from '$lib/components/PhoneMockup.svelte';
  import { reveal } from '$lib/reveal';
</script>

<section class="superpowers" id="superpowers">
  <div class="header" use:reveal={{ stage: 'title' }}>
    <p class="eyebrow">Explore NovaKit in a whole new way.</p>
    <h2>Everyday superpowers para interfaces de producto modernas.</h2>
  </div>

  <div class="layout">
    <div class="device" use:reveal={{ stage: 'content', delay: 140 }}>
      <PhoneMockup />
    </div>

    <div class="grid">
      <article class="card motion-card" use:reveal={{ stage: 'content', delay: 180 }}>
        <h3>Design tokens listos</h3>
        <p>
          Tipografía, espaciados y radios coherentes desde el primer día, sin
          pelearte con un sistema de diseño entero.
        </p>
      </article>

      <article class="card motion-card" use:reveal={{ stage: 'content', delay: 220 }}>
        <h3>Motion sin esfuerzo</h3>
        <p>
          Scroll reveal, hovers y micro‑animaciones suaves ya cableadas, listas
          para ajustar con una sola clase.
        </p>
      </article>

      <article class="card motion-card" use:reveal={{ stage: 'content', delay: 260 }}>
        <h3>Componentes composables</h3>
        <p>
          Secciones pensadas como bloques de Lego: héroes, pricing, FAQs y más que
          encajan sin romper el layout.
        </p>
      </article>

      <article class="card motion-card" use:reveal={{ stage: 'content', delay: 300 }}>
        <h3>Ready for Svelte 5</h3>
        <p>
          Estado con runes, acciones y tipado TypeScript, para que la DX sea tan
          moderna como el diseño.
        </p>
      </article>

      <article class="card motion-card" use:reveal={{ stage: 'content', delay: 340 }}>
        <h3>Opinionado, no cerrado</h3>
        <p>
          Puntos de vista fuertes sobre espaciado y ritmo visual, pero con CSS
          claro que puedes adaptar a tu marca.
        </p>
      </article>

      <article class="card motion-card" use:reveal={{ stage: 'content', delay: 380 }}>
        <h3>Listo para producción</h3>
        <p>
          Patrones pensados para productos reales, no sólo para portfolios:
          loading states, vacíos y mensajes de error.
        </p>
      </article>
    </div>
  </div>
</section>

<style>
  .superpowers {
    padding: 5rem 1.5rem 4.5rem;
    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.04), transparent 60%);
  }

  .header {
    max-width: 820px;
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
    font-size: clamp(2rem, 3vw, 2.4rem);
    letter-spacing: -0.04em;
    color: var(--text-main);
  }

  .layout {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
    gap: 2.5rem;
    align-items: center;
  }

  .device {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    perspective: 1200px;
  }

  .device-frame {
    width: 260px;
    height: 420px;
    border-radius: 34px;
    padding: 0.85rem;
    background: radial-gradient(circle at top, #111827, #020617);
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.65);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .device-header {
    width: 40%;
    height: 5px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.4);
    margin: 0 auto 0.9rem;
  }

  .device-screen {
    background: rgba(15, 23, 42, 0.95);
    border-radius: 26px;
    position: relative;
    overflow: hidden;
    flex: 1;
    min-height: 0;
  }

  .device-screen-viewport {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    cursor: default;
    touch-action: pan-y;
    overscroll-behavior: contain;
    border-radius: inherit;
  }

  .device-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 390px;
    height: 844px;
    border: none;
    transform-origin: top left;
    display: block;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .card {
    border-radius: 22px;
    background: white;
    border: 1px solid rgba(15, 23, 42, 0.06);
    padding: 1.6rem 1.7rem;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.02);
    transition:
      opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.3s var(--ease-out-soft),
      border-color 0.3s var(--ease-out-soft);
  }

  .card.is-visible:nth-child(1) {
    animation: card-float 8s ease-in-out 0.8s infinite alternate;
  }

  .card.is-visible:nth-child(2) {
    animation: card-float 9s ease-in-out 1s infinite alternate;
  }

  .card.is-visible:nth-child(3) {
    animation: card-float 7.5s ease-in-out 0.9s infinite alternate;
  }

  .card.is-visible:nth-child(4) {
    animation: card-float 8.5s ease-in-out 1.1s infinite alternate;
  }

  .card.is-visible:nth-child(5) {
    animation: card-float 9.5s ease-in-out 1.2s infinite alternate;
  }

  .card.is-visible:nth-child(6) {
    animation: card-float 7.8s ease-in-out 1.3s infinite alternate;
  }

  .card h3 {
    font-size: 1rem;
    margin-bottom: 0.45rem;
    color: var(--text-main);
  }

  .card p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .card.is-visible:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 26px 60px rgba(15, 23, 42, 0.12);
    border-color: rgba(99, 102, 241, 0.5);
  }

  /* Entrada inercial del mockup cuando la columna izquierda entra en viewport */
  .device.is-visible .device-frame {
    animation: device-inertia 1s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes device-inertia {
    0% {
      transform: translateX(-80px) scale(0.9);
    }
    70% {
      transform: translateX(8px) scale(1.02);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }

  @media (max-width: 900px) {
    .layout {
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;
    }

    .device {
      order: -1;
    }

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
    .superpowers {
      padding-block: 5.8rem 5rem;
    }

    .layout {
      max-width: 1320px;
      gap: 3rem;
    }

    .device-frame {
      width: 290px;
      height: 460px;
    }

    .grid {
      gap: 1.4rem;
    }
  }
</style>

