<script lang="ts">
  import { reveal } from '$lib/reveal';
</script>

<section class="testimonials" id="testimonials">
  <div class="header" use:reveal={{ stage: 'title', threshold: 0.12, rootMargin: '0px 0px -2% 0px' }}>
    <p class="eyebrow">Loved by designers and builders</p>
    <h2>Start bringing balance back to your interface work.</h2>
    <button class="cta">Download NovaKit preview</button>
  </div>

  <div class="columns" use:reveal={{ stage: 'content', delay: 70, threshold: 0.08, rootMargin: '0px 0px 6% 0px' }}>
    <!-- Columna 1 -->
    <div class="col">
      <div class="stack stack-slow">
        <article class="quote motion-card">
          <p class="body">
            “Pasamos de páginas de marketing estáticas a flujos completos en SvelteKit
            en cuestión de días. NovaKit nos dio un lenguaje visual coherente sin
            pelear con Figma en cada iteración.”
          </p>
          <div class="meta">
            <span class="name">Laura Sánchez</span>
            <span class="role">Product Designer en Brightlabs</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Como freelance, por fin tengo un punto de partida serio. Reutilizo las
            mismas bases en todos los clientes, pero cada proyecto se siente único
            gracias a las secciones y tokens.”
          </p>
          <div class="meta">
            <span class="name">Diego Romero</span>
            <span class="role">Frontend freelancer</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Nuestro equipo de producto puede prototipar nuevas ideas directamente
            en SvelteKit, sin esperar a que alguien maquete en HTML cada vez. Las
            microanimaciones vienen ‘justo bien’ por defecto.”
          </p>
          <div class="meta">
            <span class="name">Marta Klein</span>
            <span class="role">Head of Product en Flowstack</span>
          </div>
        </article>

        <!-- duplicados para bucle -->
        <article class="quote motion-card">
          <p class="body">
            “Desde que migramos el marketing site a NovaKit, el equipo dejó de decir
            ‘mañana lo maquetamos’ y pasó a ‘lo lanzo hoy mismo 🚀’.”
          </p>
          <div class="meta">
            <span class="name">Sergio Duarte</span>
            <span class="role">Growth Lead en Shiply</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Lo usamos como base para 3 productos distintos y casi nadie lo nota.
            Cambiamos tokens, logos y textos… y listo. Es como tener un ‘Figma vivo’ ✨.”
          </p>
          <div class="meta">
            <span class="name">Julia Pérez</span>
            <span class="role">Design Engineer</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Cada sprint empezamos clonando un layout de NovaKit en vez de una página
            vieja. Sólo eso ya nos ahorra horas de debates de diseño 🙌.”
          </p>
          <div class="meta">
            <span class="name">Héctor Molina</span>
            <span class="role">Product Manager en LinearOps</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Nuestro equipo remoto comparte capturas de la landing en Slack como si
            fuera un nuevo dribbble shot. Y todo está en producción de verdad 😍.”
          </p>
          <div class="meta">
            <span class="name">Emilia Novak</span>
            <span class="role">Remote Lead Designer</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Montamos un mini‑design system alrededor de NovaKit y, por primera vez,
            diseño y código van a la misma velocidad. No más ‘pixel perfect’ eterno 🧩.”
          </p>
          <div class="meta">
            <span class="name">Gonzalo Prieto</span>
            <span class="role">Design Systems Partner</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “El cliente pensaba que habíamos contratado una agencia cara. En realidad
            eran layouts de NovaKit con cuatro toques de marca 😏.”
          </p>
          <div class="meta">
            <span class="name">Elena Puig</span>
            <span class="role">Freelance Product Designer</span>
          </div>
        </article>
      </div>
    </div>

    <!-- Columna 2 -->
    <div class="col">
      <div class="stack stack-medium">
        <article class="quote motion-card">
          <p class="body">
            “NovaKit nos permite mantener una biblioteca de componentes coherente
            entre producto, marketing y dashboards internos sin duplicar trabajo ⚙️.”
          </p>
          <div class="meta">
            <span class="name">Ana López</span>
            <span class="role">Design Lead en Pixelwave</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “La sensación es la de abrir una app madura desde el día uno. Sólo
            tuvimos que conectar nuestros datos y empezar a iterar.”
          </p>
          <div class="meta">
            <span class="name">Carlos Medina</span>
            <span class="role">CTO en RelayOS</span>
          </div>
        </article>

        <!-- duplicados -->
        <article class="quote motion-card">
          <p class="body">
            “Antes teníamos 4 versiones distintas del mismo botón. Ahora todo sale
            del mismo kit y el equipo de soporte nos manda corazones en Slack 💜.”
          </p>
          <div class="meta">
            <span class="name">Nuria Campos</span>
            <span class="role">Design Systems Lead</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Nunca pensé que disfrutaría tanto maquetando tablas y settings. NovaKit
            hace que hasta las pantallas aburridas se sientan premium 😅.”
          </p>
          <div class="meta">
            <span class="name">Tomás Vidal</span>
            <span class="role">Frontend Engineer</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Pasamos de ‘no toquemos esa vista que se rompe’ a ‘clonemos el patrón
            de NovaKit y adaptémoslo’. Es otra mentalidad completamente distinta 💡.”
          </p>
          <div class="meta">
            <span class="name">Raquel Domínguez</span>
            <span class="role">UX Engineer</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “El handoff a back-end ahora es simplemente compartir componentes. Menos
            tickets, menos screenshots, más pull requests felices 🤝.”
          </p>
          <div class="meta">
            <span class="name">Jonas Weber</span>
            <span class="role">Full‑stack Developer</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Hay detalles de motion que parecen sacados de apps tipo Linear o Superlist.
            Y lo mejor es que puedo leer todo el CSS sin llorar 👀.”
          </p>
          <div class="meta">
            <span class="name">Patricia Gil</span>
            <span class="role">Senior Frontend</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Convertimos un prototipo de Figma en una demo navegable en una tarde.
            El equipo de ventas nos escribió ‘gracias’ en mayúsculas 🔥.”
          </p>
          <div class="meta">
            <span class="name">Marco Esposito</span>
            <span class="role">Sales Engineer</span>
          </div>
        </article>
      </div>
    </div>

    <!-- Columna 3 -->
    <div class="col">
      <div class="stack stack-fast">
        <article class="quote motion-card">
          <p class="body">
            “Esta landing nos permitió validar el mensaje de producto en días.
            Sólo cambiamos copy y datos, el diseño ya estaba hecho.”
          </p>
          <div class="meta">
            <span class="name">Marcos Vidal</span>
            <span class="role">Founder en Orbit Kit</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “La sensación de navegar NovaKit recuerda a las mejores apps de
            productividad modernas, pero todo es código Svelte que controlamos.”
          </p>
          <div class="meta">
            <span class="name">Irene Souza</span>
            <span class="role">Staff Engineer</span>
          </div>
        </article>

        <!-- duplicados -->
        <article class="quote motion-card">
          <p class="body">
            “Esta landing nos permitió validar el mensaje de producto en días.
            Sólo cambiamos copy y datos, el diseño ya estaba hecho ✅.”
          </p>
          <div class="meta">
            <span class="name">Marcos Vidal</span>
            <span class="role">Founder en Orbit Kit</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Hicimos el handoff al equipo de marketing y ahora pueden crear nuevas
            páginas solos. Yo solo reviso el pull request y sonrío 😎.”
          </p>
          <div class="meta">
            <span class="name">Lucía Roldán</span>
            <span class="role">Staff Frontend en Northwind</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “El código que genera NovaKit es tan limpio que hasta nuestro CTO,
            que es muy tiquismiquis, nos dio un ‘ok’ a la primera 🧠.”
          </p>
          <div class="meta">
            <span class="name">Pablo Ortega</span>
            <span class="role">VP of Engineering</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “En demo con inversores, usamos directamente la landing hecha con NovaKit.
            Nadie preguntó por el diseño, sólo por el roadmap. Eso lo dice todo 💬.”
          </p>
          <div class="meta">
            <span class="name">Mireia Costa</span>
            <span class="role">Founder en Lauchly</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Conectamos NovaKit a nuestra API y en una tarde teníamos un mini‑portal
            para clientes que parecía llevar meses puliéndose ✨.”
          </p>
          <div class="meta">
            <span class="name">Andrés Lima</span>
            <span class="role">Solutions Architect</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “El equipo de data nos pidió ‘algo rápido’ para enseñar métricas.
            Les dimos un dashboard con NovaKit y ahora no quieren otra cosa 📊.”
          </p>
          <div class="meta">
            <span class="name">Silvia Ramos</span>
            <span class="role">Analytics Lead</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            “Me encanta que pueda abrir el repo de la landing, tocar un par de props
            y ver cambios reales en minutos. Zero miedo a romper el diseño 💻.”
          </p>
          <div class="meta">
            <span class="name">Rui Carvalho</span>
            <span class="role">Software Engineer</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<style>
  .testimonials {
    padding: 5rem 1.5rem 6rem;
    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.06), transparent 55%);
    position: relative;
  }

  /* Funda inferior: hace que las columnas parezcan salir de detrás del bloque de abajo */
  .testimonials::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120px;
    background: linear-gradient(
      to top,
      var(--bg-main) 0%,
      rgba(249, 250, 251, 0.9) 35%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  .header {
    max-width: 820px;
    margin: 0 auto 3rem;
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
    font-size: clamp(2rem, 3vw, 2.6rem);
    letter-spacing: -0.04em;
    color: var(--text-main);
  }
  .cta {
    margin-top: 1.5rem;
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, var(--accent), var(--accent-hover));
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
  }

  .columns {
    max-width: 1100px;
    margin: -1.5rem auto 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    position: relative;
    z-index: 1; /* por encima del velo inferior */
  }

  .col {
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
    mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .quote {
    border-radius: 24px;
    background: white;
    border: 1px solid rgba(15, 23, 42, 0.06);
    padding: 1.8rem 1.9rem;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.03);
    cursor: pointer;
  }

  .body {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.25rem;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .name {
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .role {
    font-size: 0.82rem;
    color: var(--text-secondary);
  }

  .stack-slow {
    animation: slide-up-slow 42s linear infinite;
  }

  .stack-medium {
    animation: slide-up-medium 32s linear infinite;
  }

  .stack-fast {
    animation: slide-up-fast 26s linear infinite;
  }

  .col:hover .stack-slow,
  .col:hover .stack-medium,
  .col:hover .stack-fast {
    animation-play-state: paused;
  }

  @keyframes slide-up-slow {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  @keyframes slide-up-medium {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-55%);
    }
  }

  @keyframes slide-up-fast {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-60%);
    }
  }

  @media (max-width: 640px) {
    .testimonials {
      padding-inline: 1.25rem;
    }

    .columns {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

