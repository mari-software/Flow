<script lang="ts">
	import DaisyInputField from '$lib/component/library/daisyui/DaisyUiInputField.svelte';
	import DaisyUiButton from '$lib/component/library/daisyui/DaisyUiButton.svelte';
	import DaisyUiTooltip from '$lib/component/library/daisyui/DaisyUiTooltip.svelte';
	import DaisyUiLabel from '$lib/component/library/daisyui/DaisyUiLabel.svelte';
	import DaisyUiAlert from '$lib/component/library/daisyui/DaisyUiAlert.svelte';
	import DaisyUiToast from '$lib/component/library/daisyui/DaisyUiToast.svelte';

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

<DaisyUiLabel>
	<svg
		class="h-[1em] opacity-50"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<g
			stroke-linejoin="round"
			stroke-linecap="round"
			stroke-width="2.5"
			fill="none"
			stroke="currentColor"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
			<circle cx="12" cy="7" r="4"></circle>
		</g>
	</svg>
	<DaisyInputField inputPlaceholderText="Enter a number" inputType="number" />
</DaisyUiLabel>

<DaisyUiAlert className="d-alert-info" show>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		class="h-6 w-6 shrink-0 stroke-current"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		></path>
	</svg>
</DaisyUiAlert>

<DaisyUiToast>
	<div class="d-alert d-alert-info">
		<span>New mail arrived.</span>
	</div>
	<div class="d-alert d-alert-success">
		<span>Message sent successfully.</span>
	</div>
</DaisyUiToast>
