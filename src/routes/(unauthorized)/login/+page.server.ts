import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import type { Action, Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
};

const login: Action = async ({ cookies, request }) => {
	const { email, password } = Object.fromEntries(await request.formData()) as {
		email: string;
		password: string;
	};

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { invalid: true });
	}

	const user = await prisma.user.findUnique({ where: { email } });

	if (!user) {
		return fail(400, { credentials: true });
	}

	const userPassword = await bcrypt.compare(password, user.password);

	if (!userPassword) {
		return fail(400, { credentials: true });
	}

	const authenticatedUser = await prisma.user.update({
		where: { email: email },
		data: { userAuthToken: crypto.randomUUID() }
	});

	cookies.set('session', authenticatedUser.userAuthToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 1
	});

	throw redirect(302, '/');
};

export const actions: Actions = { login };
