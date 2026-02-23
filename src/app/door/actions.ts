'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import crypto from 'crypto'
import { DOOR_COOKIE_NAME, DOOR_PAYLOAD } from '@/lib/door'

function createDoorToken(secret: string): string {
	return crypto.createHmac('sha256', secret).update(DOOR_PAYLOAD).digest('hex')
}

export async function submitDoor(
	_prevState: { error?: string } | null,
	formData: FormData
) {
	const secret = process.env.DOOR_SECRET
	if (!secret) {
		return { error: 'Door is not configured.' }
	}

	const submitted = formData.get('secret')
	if (typeof submitted !== 'string' || !submitted.trim()) {
		return { error: 'Please enter the secret.' }
	}

	if (submitted.trim() !== secret) {
		return { error: 'Wrong secret.' }
	}

	const token = createDoorToken(secret)
	const cookieStore = await cookies()
	const isProd = process.env.NODE_ENV === 'production'

	cookieStore.set(DOOR_COOKIE_NAME, token, {
		httpOnly: true,
		secure: isProd,
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 30, // 30 days
	})

	redirect('/inside')
}
