<script lang="ts">
	import DaisyUiButton from '$lib/component/library/daisyui/DaisyUiButton.svelte';
	import DaisyUiTooltip from '$lib/component/library/daisyui/DaisyUiTooltip.svelte';

	let num: number = $state(1);

	function addOne() {
		num += 1;
	}
</script>

{num}
<DaisyUiTooltip
	tooltipText="Increment the number"
	className="d-tooltip-right d-tooltip-secondary"
>
	<DaisyUiButton className="d-btn-warning" onClick={addOne}>Add</DaisyUiButton>
</DaisyUiTooltip>
