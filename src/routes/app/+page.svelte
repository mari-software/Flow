<script lang="ts">
	import { FlowRouteData } from '$lib/model/data/route.data';
</script>

<div class="grid grid-cols-3 gap-4">
	{#each FlowRouteData as route}
		<a href={route.url}>
			<div
				class="card bg-base-100 flex w-96 flex-col items-center gap-2 p-4 shadow-sm"
			>
				<div>
					<svelte:component this={route.icon} class="size-48" />
				</div>
				<div class="m-font-display-large">{route.name}</div>
			</div>
		</a>
	{/each}
</div>
