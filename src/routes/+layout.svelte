<script lang="ts">
	import "../app.css"; // Importamos los estilos globales
	// Nota: Asegúrate de tener el archivo favicon.svg en src/lib/assets/
	import favicon from '$lib/assets/favicon.svg';

	function handleLinkMove(event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
		target.style.setProperty("--my", `${event.clientY - rect.top}px`);
	}

  </script>
  
  <svelte:head>
	<title>NovaKit — Creative UI Toolkit</title>
	<link rel="icon" href={favicon} />
  </svelte:head>
  
  <header>
	<div class="container nav-shell">
	  <div class="logo">NovaKit</div>
  
	  <nav>
		<a href="#features" onmousemove={handleLinkMove}>Features</a>
		<a href="#pricing" onmousemove={handleLinkMove}>Pricing</a>
		<a class="nav-cta" href="#contact" onmousemove={handleLinkMove}>Contact</a>
	  </nav>
	</div>
  </header>
  
  <slot />
  
  <style>
	header {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  z-index: 100;
	  padding-top: 0.8rem;
	  display: flex;
	  justify-content: center;
	  pointer-events: none;
	}

	.container {
	  max-width: 1280px;
	  margin: 0 auto;
	  padding: 1rem 1.5rem;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}

	.nav-shell {
	  width: min(92%, 1200px);
	  background: rgba(255, 255, 255, 0.88);
	  border: 1px solid rgba(255, 255, 255, 0.6);
	  border-radius: 999px;
	  box-shadow:
		0 14px 40px rgba(15, 23, 42, 0.12),
		0 1px 0 rgba(255, 255, 255, 0.65) inset;
	  pointer-events: auto;
	  transition:
		background-color 0.28s ease,
		box-shadow 0.28s ease,
		border-color 0.28s ease;
	}
  
	.logo {
	  font-size: 1.25rem;
	  font-weight: 700;
	  color: var(--accent); /* Usamos el color de marca */
	  letter-spacing: -0.04em;
	}
  
	nav {
	  display: flex;
	  gap: 0.55rem;
	}
  
	nav a {
	  --mx: 50%;
	  --my: 50%;
	  text-decoration: none;
	  color: var(--text-secondary);
	  font-size: 0.9rem;
	  font-weight: 500;
	  letter-spacing: -0.015em;
	  min-height: 44px;
	  display: inline-flex;
	  align-items: center;
	  justify-content: center;
	  padding: 0.62rem 1rem;
	  border-radius: 999px;
	  position: relative;
	  overflow: hidden;
	  transition: color 0.2s ease, transform 0.2s ease;
	}

	nav a::before {
	  content: "";
	  position: absolute;
	  inset: 0;
	  border-radius: inherit;
	  background:
		radial-gradient(circle at var(--mx) var(--my), rgba(167, 139, 250, 0.24), transparent 55%),
		rgba(99, 102, 241, 0.06);
	  opacity: 0;
	  transform: scale(0.92);
	  transition: opacity 0.22s ease, transform 0.22s ease;
	  pointer-events: none;
	}

	nav a > :global(*) {
	  position: relative;
	  z-index: 1;
	}
  
	nav a:hover {
	  color: #111827;
	  transform: translateY(-1px);
	}

	nav a:hover::before {
	  opacity: 1;
	  transform: scale(1);
	}

	.nav-cta {
	  color: #f5f3ff;
	  background: linear-gradient(135deg, #6366f1, #8b5cf6);
	  border: 1px solid rgba(139, 92, 246, 0.45);
	  box-shadow: 0 10px 26px rgba(99, 102, 241, 0.25);
	}

	.nav-cta::before {
	  background:
		linear-gradient(
		  115deg,
		  transparent 18%,
		  rgba(255, 255, 255, 0.38) 46%,
		  rgba(255, 255, 255, 0.04) 62%,
		  transparent 78%
		);
	  opacity: 0.7;
	  transform: translateX(-120%);
	  transition: transform 0.55s ease, opacity 0.3s ease;
	}

	.nav-cta:hover {
	  color: #ffffff;
	  transform: translateY(-1px);
	  box-shadow: 0 14px 34px rgba(99, 102, 241, 0.33);
	}

	.nav-cta:hover::before {
	  opacity: 1;
	  transform: translateX(120%);
	}

	@media (max-width: 640px) {
	  header {
		padding-top: 0.5rem;
	  }

	  .container {
		padding: 0.66rem 0.85rem;
		gap: 0.75rem;
		flex-wrap: wrap;
	  }

	  .nav-shell {
		width: min(95%, 560px);
		border-radius: 18px;
	  }

	  .logo {
		font-size: 1.05rem;
	  }

	  nav {
		width: 100%;
		justify-content: center;
		gap: 0.45rem;
		flex-wrap: wrap;
	  }

	  nav a {
		font-size: 0.84rem;
		padding-inline: 0.75rem;
	  }
	}

	@media (min-width: 1600px) {
	  .container {
		max-width: 1440px;
		padding-inline: 2rem;
	  }

	  nav {
		gap: 2.4rem;
	  }
	}
  </style>