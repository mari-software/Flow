<script lang="ts">
	// component
	import RoutesFooterBar from '$lib/component/global/routes/RoutesFooterBar.svelte';
	import RoutesNavigationBar from '$lib/component/global/routes/RoutesNavigationBar.svelte';

	// file
	import '../app.css';

	// library
	import { RenderScan } from 'svelte-render-scan';

	let { children } = $props();
</script>

<div class="app">
	<section class="navigation-bar">
		<RoutesNavigationBar />
	</section>
	<main>
		{@render children()}
	</main>
	<section class="footer-bar">
		<RoutesFooterBar />
	</section>
</div>

<RenderScan />
