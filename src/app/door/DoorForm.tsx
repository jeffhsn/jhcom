'use client'

import { useActionState } from 'react'
import { submitDoor } from './actions'

export default function DoorForm() {
	const [state, formAction] = useActionState(submitDoor, null as { error?: string } | null)

	return (
		<form action={formAction} className="mt-6 space-y-4">
			{state?.error && (
				<p
					className="rounded-lg px-3 py-2 text-sm"
					style={{
						backgroundColor: 'rgba(239, 68, 68, 0.15)',
						color: 'var(--text-primary)',
					}}
					role="alert"
				>
					{state.error}
				</p>
			)}
			<div>
				<label htmlFor="door-secret" className="sr-only">
					Secret
				</label>
				<input
					id="door-secret"
					name="secret"
					type="password"
					placeholder="Secret"
					className="inbox-input w-full"
					required
					autoComplete="current-password"
					aria-label="Secret"
				/>
			</div>
			<button type="submit" className="inbox-button w-full">
				Enter
			</button>
		</form>
	)
}
