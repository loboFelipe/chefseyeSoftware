import type { Handle } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) {
		return await resolve(event);
	}

	const user = await prisma.user.findUnique({
		where: { userAuthToken: session },
		select: { email: true, first_name: true, last_name: true, role: true }
	});

	if (user) {
		event.locals.user = {
			name: `${user.first_name} ${user.last_name}`,
			email: user.email,
			role: user.role.name
		};
	}

	return await resolve(event);
};
