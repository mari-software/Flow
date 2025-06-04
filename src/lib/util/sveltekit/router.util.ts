import { goto } from '$app/navigation';

export function goToRoute(url: string) {
	goto(url);
}
