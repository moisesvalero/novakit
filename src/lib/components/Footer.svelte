<script lang="ts">
  import { onMount } from 'svelte';
  import { reveal } from '$lib/reveal';

  let now = $state(new Date());

  onMount(() => {
    const id = setInterval(() => {
      now = new Date();
    }, 60_000);

    return () => clearInterval(id);
  });

  function worldClock() {
    const d = now;
    const hour = d.getHours();
    const emoji = hour >= 7 && hour < 20 ? '☀️' : '🌙';
    const time = d.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    return `ALC / ESP — ${time} ${emoji}`;
  }
</script>

<footer
  id="contact"
  class="footer"
  use:reveal={{ stage: 'content', delay: 60, distance: 96, threshold: 0.03, rootMargin: '0px 0px 26% 0px' }}
>
  <div class="footer-inner">
    <div class="side left">
      <div class="brand">
        <span class="logo-dot"></span>
        <div class="brand-text">
          <span class="brand-name">NovaKit</span>
          <span class="brand-tagline">The last UI toolkit you will ever need.</span>
        </div>
      </div>
    </div>

    <div class="side center">
      <div class="status">
        <span class="status-dot"></span>
        <span class="status-label">{worldClock()}</span>
      </div>
    </div>

    <div class="side right">
      <button
        class="back-to-top"
        type="button"
        onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        ↑
      </button>
      <div class="credits">
        <span>Designed by</span>
        <a href="https://moisesvalero.es/" target="_blank" rel="noreferrer">Moisés Valero</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    --assembly-scale-from: 1;
    --assembly-scale-to: 1;
    --assembly-duration: 1260ms;
    position: relative;
    z-index: 0;
    overflow: clip;
    backface-visibility: hidden;
    isolation: isolate;
    background: #0a0a0b;
    padding: 1.75rem 1.75rem 1.9rem;
    border-top: 1px solid transparent;
    background-image:
      linear-gradient(
        to right,
        rgba(148, 163, 184, 0.25),
        rgba(99, 102, 241, 0.6),
        rgba(148, 163, 184, 0.25)
      ),
      linear-gradient(#0a0a0b, #0a0a0b);
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1.2fr);
    align-items: center;
    gap: 1.75rem;
    color: #e5e7eb;
  }

  :global(.footer.is-visible) .footer-inner {
    animation: footer-impact 900ms cubic-bezier(0.22, 1.2, 0.36, 1) 120ms both;
  }

  .side {
    display: flex;
    align-items: center;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
  }

  .logo-dot {
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: radial-gradient(circle at top, #6366f1, #a855f7);
    box-shadow: 0 0 0 0 rgba(129, 140, 248, 0.8);
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .brand-name {
    font-weight: 700;
    letter-spacing: -0.04em;
    color: #f9fafb;
  }

  .brand-tagline {
    font-size: 0.85rem;
    color: #9ca3af;
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.85);
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.9);
  }

  .status-dot {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #fbbf24;
  }

  .status-dot::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.72);
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .status-label {
    font-size: 0.78rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    letter-spacing: 0.08em;
    color: #9ca3af;
  }

  .credits {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.8rem;
    color: #9ca3af;
  }

  .credits a {
    position: relative;
    color: #e5e7eb;
    text-decoration: none;
  }

  .credits a::after {
    content: "";
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: -2px;
    height: 1px;
    background: linear-gradient(to right, transparent, #6366f1, transparent);
    transition: left 0.25s ease-out, right 0.25s ease-out;
  }

  .credits a:hover::after {
    left: 0;
    right: 0;
  }

  .back-to-top {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.6);
    background: radial-gradient(circle at top, #111827, #020617);
    color: #e5e7eb;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    margin-right: 0.9rem;
    cursor: pointer;
    box-shadow: 0 12px 35px rgba(15, 23, 42, 0.85);
    transform: translateY(0);
    transition:
      transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .back-to-top:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 55px rgba(15, 23, 42, 0.95);
  }

  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 0.9;
    }
    70% {
      transform: scale(1.8);
      opacity: 0;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  @keyframes footer-impact {
    0% {
      transform: translateY(28px) scale(0.975);
    }
    36% {
      transform: translateY(-20px) scale(1.02);
    }
    62% {
      transform: translateY(8px) scale(0.996);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 800px) {
    .footer-inner {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.2rem;
    }

    .side.right {
      justify-content: space-between;
    }
  }
</style>

