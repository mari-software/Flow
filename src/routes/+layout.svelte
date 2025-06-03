<script lang="ts">
	import '../app.css';
	import { RenderScan } from 'svelte-render-scan';

	let { children } = $props();
</script>

{@render children()}

<RenderScan />
