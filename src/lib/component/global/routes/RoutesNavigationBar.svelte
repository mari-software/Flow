<script>
	import DaisyUiButton from '$lib/component/library/daisyui/DaisyUiButton.svelte';
	import { ApplicationEnum } from '$lib/model/enum/application.enum';
</script>

<div class="d-navbar bg-base-100 shadow-sm">
	<div class="d-navbar-start">
		<div class="d-dropdown">
			<div tabindex="0" role="button" class="d-btn d-btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				class="d-menu d-menu-sm d-dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				<!-- menu go here -->
			</ul>
		</div>
		<a href="/" class="d-btn d-btn-ghost text-xl">{ApplicationEnum.NAME}</a>
	</div>

	<div class="d-navbar-end">
		<DaisyUiButton
			className="d-btn-neutral"
			onClick={() => console.log('click')}>Account</DaisyUiButton
		>
	</div>
</div>
