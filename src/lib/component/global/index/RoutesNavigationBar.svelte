<script>
	import DaisyUiButton from '$lib/component/library/daisyui/DaisyUiButton.svelte';
	import { ApplicationEnum } from '$lib/model/enum/application.enum';
	import { LucideMenu } from '@lucide/svelte';
</script>

<div class="d-navbar bg-base-100 shadow-sm">
	<div class="d-navbar-start">
		<div class="d-dropdown">
			<div tabindex="0" role="button" class="d-btn d-btn-ghost">
				<LucideMenu />
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
