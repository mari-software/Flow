<script>
	import Favicon from '$lib/asset/image/svg/Favicon.svelte';
	import { ApplicationEnum } from '$lib/model/enum/application.enum';
	import { LucideTwitter, LucideYoutube, LucideMailbox } from '@lucide/svelte';
</script>

<footer
	class="d-footer d-footer-horizontal d-footer-center bg-primary text-primary-content p-10"
>
	<aside>
		<Favicon className="size-20" />
		<p class="font-bold">
			{ApplicationEnum.COMPANY}
			<br />
			Free and Open Source Softwares
		</p>
		<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a href="/" aria-label="Twitter">
				<LucideTwitter />
			</a>
			<a href="/" aria-label="YouTube">
				<LucideYoutube />
			</a>
			<a href="/" aria-label="Facebook">
				<LucideMailbox />
			</a>
		</div>
	</nav>
</footer>
