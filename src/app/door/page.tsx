import Link from 'next/link'
import DoorForm from './DoorForm'

const doorConfigured = Boolean(process.env.DOOR_SECRET)

export default function DoorPage() {
	if (!doorConfigured) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
				<div className="page-bg" aria-hidden />
				<div
					className="gbc-column relative z-10 mx-auto flex max-w-2xl flex-col items-center rounded-xl border border-[var(--border-color)] px-4 py-12"
					style={{ backgroundColor: 'var(--bg-secondary)' }}
				>
					<h1
						className="text-2xl font-bold"
						style={{ color: 'var(--text-primary)' }}
					>
						Door not configured
					</h1>
					<p
						className="mt-2 text-sm"
						style={{ color: 'var(--text-muted)' }}
					>
						Set DOOR_SECRET in the environment to enable the door.
					</p>
					<Link
						href="/"
						className="link-button mt-8 inline-block"
					>
						{'← Back to Home'}
					</Link>
				</div>
			</main>
		)
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
			<div className="page-bg" aria-hidden />
			<div
				className="gbc-column relative z-10 mx-auto w-full max-w-md rounded-xl border border-[var(--border-color)] p-6"
				style={{ backgroundColor: 'var(--bg-secondary)' }}
			>
				<h1
					className="text-center text-2xl font-bold"
					style={{ color: 'var(--text-primary)' }}
				>
					Enter
				</h1>
				<p
					className="mt-1 text-center text-sm"
					style={{ color: 'var(--text-muted)' }}
				>
					Enter the secret to continue.
				</p>
				<DoorForm />
				<p className="mt-4 text-center">
					<Link
						href="/"
						className="text-sm hover:underline"
						style={{ color: 'var(--text-muted)' }}
					>
						{'← Back to Home'}
					</Link>
				</p>
			</div>
		</main>
	)
}
