<script lang="ts">
  import { onMount } from 'svelte';
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n/index.js';

  let now = $state(new Date());
  let locationLabel = $state('ALC / ESP');

  function detectViewerLocation() {
    const fallback = 'ALC / ESP';

    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const city = timeZone?.split('/').pop()?.replace(/_/g, ' ') ?? '';
      const cityCode = city ? city.slice(0, 3).toUpperCase() : '';

      const localeCandidates = [navigator.language, ...(navigator.languages ?? [])];
      const regionMatch = localeCandidates
        .map((locale) => locale?.match(/-([A-Za-z]{2})\b/))
        .find(Boolean);
      const regionCode = regionMatch?.[1]?.toUpperCase() ?? '';

      locationLabel = cityCode && regionCode ? `${cityCode} / ${regionCode}` : fallback;
    } catch {
      locationLabel = fallback;
    }
  }

  onMount(() => {
    detectViewerLocation();

    const id = setInterval(() => {
      now = new Date();
    }, 60_000);

    return () => clearInterval(id);
  });

  function worldClock() {
    const d = now;
    const hour = d.getHours();
    const icon = hour >= 7 && hour < 20 ? '☀' : '☾';
    const time = d.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    return { time, icon };
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
          <span class="brand-tagline">{$t('footer.tagline')}</span>
        </div>
      </div>
    </div>

    <div class="side center">
      <div class="status">
        <span class="status-dot animate-pulse" aria-hidden="true"></span>
        <span class="status-label">{locationLabel} — {worldClock().time}</span>
        <span class="status-icon" aria-hidden="true">{worldClock().icon}</span>
      </div>
    </div>

    <div class="side right">
      <button
        class="back-to-top"
        type="button"
        onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={$t('footer.backToTopAria')}
      >
        <svg
          class="arrow-up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>
      <div class="credits">
        <span>{$t('footer.designedBy')}</span>
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
    animation: footer-impact 900ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both;
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
    padding: 0.55rem 0.95rem;
    border-radius: 999px;
    background: #000;
    border: 1px solid #1d1e21;
    box-shadow: none;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #d08a61;
    box-shadow: 0 0 0 1px rgba(208, 138, 97, 0.28);
  }

  .animate-pulse {
    animation: pulse 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }

  .status-label {
    font-size: clamp(0.78rem, 2.7vw, 0.9rem);
    font-family: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco,
      Consolas, "Liberation Mono", "Courier New", monospace;
    letter-spacing: 0.08em;
    color: #ddd;
  }

  .status-icon {
    font-size: 0.78rem;
    line-height: 1;
    color: #888;
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
    transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .credits a:hover::after {
    left: 0;
    right: 0;
  }

  .back-to-top {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    border: 1px solid rgba(148, 163, 184, 0.24);
    background: #141518;
    color: #bfc4cf;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 0.9rem;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.35);
    transition: border-color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .arrow-up {
    width: 16px;
    height: 16px;
    transition:
      transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
      color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .back-to-top:hover {
    background: #1a1c21;
    border-color: rgba(148, 163, 184, 0.36);
  }

  .back-to-top:hover .arrow-up {
    transform: translateY(-2px);
    color: #a78bfa;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.72;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.72;
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
      text-align: center;
    }

    .side.left,
    .side.center,
    .side.right {
      justify-content: center;
      width: 100%;
    }

    .status {
      justify-content: center;
      width: min(100%, 320px);
      margin-inline: auto;
    }

    .brand {
      justify-content: center;
    }

    .brand-text {
      align-items: center;
    }

    .credits {
      justify-content: center;
    }

    .back-to-top {
      margin-right: 0.6rem;
    }
  }

  @media (min-width: 1600px) {
    .footer-inner {
      max-width: 1360px;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1.4fr);
    }
  }
</style>

