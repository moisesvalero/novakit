<script lang="ts">
	import "../app.css"; // Importamos los estilos globales
	// Nota: Asegúrate de tener el archivo favicon.svg en src/lib/assets/
	import favicon from '$lib/assets/favicon.svg'; 
  </script>
  
  <svelte:head>
	<title>NovaKit — Creative UI Toolkit</title>
	<link rel="icon" href={favicon} />
  </svelte:head>
  
  <header>
	<div class="container">
	  <div class="logo">NovaKit</div>
  
	  <nav>
		<a href="#features">Features</a>
		<a href="#pricing">Pricing</a>
		<a href="#contact">Contact</a>
	  </nav>
	</div>
  </header>
  
  <slot />
  
  <style>
	header {
	  position: sticky;
	  top: 0;
	  z-index: 100; /* Asegura que el menú siempre esté por encima del contenido */
	  background: rgba(255, 255, 255, 0.8); /* Fondo semi-transparente */
	  backdrop-filter: blur(12px); /* Efecto cristalino de iOS/Superlist */
	  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}
  
	.container {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 1rem 1.5rem;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
  
	.logo {
	  font-size: 1.25rem;
	  font-weight: 700;
	  color: var(--accent); /* Usamos el color de marca */
	  letter-spacing: -0.5px;
	}
  
	nav {
	  display: flex;
	  gap: 2rem;
	}
  
	nav a {
	  text-decoration: none;
	  color: var(--text-secondary);
	  font-size: 0.9rem;
	  font-weight: 500;
	  transition: color 0.2s ease;
	}
  
	nav a:hover {
	  color: var(--accent);
	}
  </style>