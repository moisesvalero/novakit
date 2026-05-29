<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import Workflow from '$lib/components/Workflow.svelte';
	import ComponentGallery from '$lib/components/ComponentGallery.svelte';
	import UseCases from '$lib/components/UseCases.svelte';
	import Superpowers from '$lib/components/Superpowers.svelte';
	import Features from '$lib/components/Features.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import DeepDetails from '$lib/components/DeepDetails.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// 2. PRICING: Lógica del interruptor (Svelte 5 runes)
	let isYearly = $state(false);
	function toggleBilling() {
		isYearly = !isYearly;
	}
</script>

<Hero />
<SocialProof />
<Workflow />
<ComponentGallery />
<UseCases />
<Superpowers />
<Features />
<Pricing {isYearly} {toggleBilling} />
<Testimonials />
<DeepDetails />
<FAQ />
<Footer />
