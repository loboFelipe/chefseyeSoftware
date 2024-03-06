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
	const { email, first_name, last_name, password, confirm_password } = Object.fromEntries(await request.formData()) as {
		email: string;
		first_name: string,
		last_name: string,
		password: string;
		confirm_password: string;
	};

	console.log(email, first_name, last_name, password, confirm_password)

	if (typeof email !== 'string' || typeof password !== 'string' || typeof confirm_password !== 'string' || typeof first_name !== 'string' || typeof last_name !== 'string' || !email || !password || !first_name || !last_name || !confirm_password) {
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

	console.log(user)

	await prisma.user.create({
		data: {
			email: email,
			password: await bcrypt.hash(password, 10),
			first_name: first_name,
			last_name: last_name,
			userAuthToken: crypto.randomUUID(),
			role: { connect: { name: Roles.USER } }
		}
	})

	const users = await prisma.user.findMany();

	console.log(users);

	throw redirect(303, '/login');
};

export const actions: Actions = {
	register
};
