/* eslint-disable no-var */
// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Platform {}
		interface Locals {
			user: {
				name: string;
				email: string;
				role: string;
			};
		}
	}
	var prisma: PrismaClient;
}

export {};
