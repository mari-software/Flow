// src/lib/model/data/route.data.ts

import type { RouteInterface } from '$lib/model/interface/route.interface';
import {
	LucideBrainCircuit,
	LucideCircleUser,
	LucideCloudSun,
	LucideCloudUpload,
	LucideDatabaseZap,
	LucidePersonStanding
} from '@lucide/svelte';

export const FlowRouteData: RouteInterface[] = [
	{
		name: 'hr',
		url: '/app/hr-app',
		icon: LucidePersonStanding
	},
	{
		name: 'weather',
		url: '/app/weather-app',
		icon: LucideCloudSun
	},
	{
		name: 'dbms',
		url: '/app/dbms-app',
		icon: LucideDatabaseZap
	},
	{
		name: 'ai',
		url: '/app/ai-app',
		icon: LucideBrainCircuit
	},
	{
		name: 'account',
		url: '/app/account-app',
		icon: LucideCircleUser
	},
	{
		name: 'cloud',
		url: '/app/cloud-app',
		icon: LucideCloudUpload
	}
];
