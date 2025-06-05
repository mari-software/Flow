<script lang="ts">
	// component
	import RoutesFooterBar from '$lib/component/global/index/RoutesFooterBar.svelte';
	import RoutesNavigationBar from '$lib/component/global/index/RoutesNavigationBar.svelte';

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
	<main class="my-4">
		{@render children()}
	</main>
	<section class="footer-bar">
		<RoutesFooterBar />
	</section>
</div>

<RenderScan />
