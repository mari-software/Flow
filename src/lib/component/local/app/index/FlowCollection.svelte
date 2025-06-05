<script lang="ts">
	import { FlowRouteData } from '$lib/model/data/route.data';
</script>

{#each FlowRouteData as route}
	<a href={route.url}>
		<div
			class="card bg-base-100 hover:bg-base-300 flex w-48 flex-col items-center gap-4 p-4 shadow-lg"
		>
			<figure>
				<svelte:component this={route.icon} class="size-20" />
			</figure>
			<div class="card-body">
				<div class="card-title">
					<div class="m-font-heading-5 m-font-weight-semibold">
						{route.name}
					</div>
				</div>
			</div>
		</div>
	</a>
{/each}
