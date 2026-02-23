export const DOOR_COOKIE_NAME = 'door_access'
export const DOOR_PAYLOAD = 'door'

/** Compute HMAC-SHA256(secret, payload) as hex. Edge-compatible (Web Crypto). */
export async function doorToken(secret: string): Promise<string> {
	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	)
	const sig = await crypto.subtle.sign(
		'HMAC',
		key,
		new TextEncoder().encode(DOOR_PAYLOAD)
	)
	return Array.from(new Uint8Array(sig))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('')
}
