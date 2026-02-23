import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DOOR_COOKIE_NAME, doorToken } from '@/lib/door'

const PRIVATE_PREFIX = '/inside'

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	if (!pathname.startsWith(PRIVATE_PREFIX)) {
		return NextResponse.next()
	}

	const secret = process.env.DOOR_SECRET
	if (!secret) {
		return NextResponse.redirect(new URL('/door', request.url))
	}

	const cookieValue = request.cookies.get(DOOR_COOKIE_NAME)?.value
	if (!cookieValue) {
		return NextResponse.redirect(new URL('/door', request.url))
	}

	const expected = await doorToken(secret)
	if (cookieValue !== expected) {
		const res = NextResponse.redirect(new URL('/door', request.url))
		res.cookies.delete(DOOR_COOKIE_NAME)
		return res
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/inside', '/inside/:path*'],
}
