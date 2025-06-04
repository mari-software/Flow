<script lang="ts">
	import { goToRoute } from '$lib/util/sveltekit/router.util';
	import { onMount } from 'svelte';

	onMount(() => {
		goToRoute('app');
	});
</script>
