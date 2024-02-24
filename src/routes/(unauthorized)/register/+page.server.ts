import { redirect, fail } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { prisma } from '$lib/server/prisma';
import type { Action, Actions, PageServerLoad } from './$types';

enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
};

const register: Action = async ({ request }) => {
	const { email, first_name, last_name, password } = Object.fromEntries(await request.formData()) as {
		email: string;
		first_name: string,
		last_name: string,
		password: string;
	};

	if (typeof email !== 'string' || typeof password !== 'string' || typeof first_name !== 'string' || typeof last_name !== 'string' || !email || !password || !first_name || !last_name) {
		return fail(400, { invalid: true });
	}

	const user = await prisma.user.findUnique({
		where: {  
			email
		}
	});

	if (user) {
		return fail(400, { user: true });
	}

	await prisma.user.create({
		data: {
			email,
			first_name,
			last_name,
			password: await bcrypt.hash(password, 10),
			userAuthToken: crypto.randomUUID(),
			role: { connect: { name: Roles.ADMIN } }
		}
	});

	throw redirect(303, '/login');
};

export const actions: Actions = {
	register
};
