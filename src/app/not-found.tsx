import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
			<h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
				Page not found
			</h1>
			<p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
				This place is still under construction.
			</p>
			<Link href="/" className="link-button mt-8 inline-block">
				{'← Back to Home'}
			</Link>
		</main>
	);
}
