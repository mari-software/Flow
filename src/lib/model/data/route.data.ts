// src/lib/model/data/route.data.ts
import PhosphorCloudSun from '$lib/component/library/phosphor/PhosphorCloudSun.svelte';
import PhosphorDatabase from '$lib/component/library/phosphor/PhosphorDatabase.svelte';
import PhosphorRobot from '$lib/component/library/phosphor/PhosphorRobot.svelte';
import PhosphorPersonArmsSpread from '$lib/component/library/phosphor/PhosphorPersonArmsSpread.svelte';
import PhosphorCloudArrowUp from '$lib/component/library/phosphor/PhosphorCloudArrowUp.svelte';
import PhosphorUsersFour from '$lib/component/library/phosphor/PhosphorUsersFour.svelte';

import type { RouteInterface } from '$lib/model/interface/route.interface';

export const FlowRouteData: RouteInterface[] = [
    
	{
		name: 'hr',
		url: '/app/hr-app',
		icon: PhosphorUsersFour
	},
	{
		name: 'weather',
		url: '/app/weather-app',
		icon: PhosphorCloudSun
	},
	{
		name: 'dbms',
		url: '/app/dbms-app',
		icon: PhosphorDatabase
	},
	{
		name: 'ai',
		url: '/app/ai-app',
		icon: PhosphorRobot
	},
	{
		name: 'account',
		url: '/app/account-app',
		icon: PhosphorPersonArmsSpread
	},
	{
		name: 'cloud',
		url: '/app/cloud-app',
		icon: PhosphorCloudArrowUp
	},
];
