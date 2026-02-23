import Link from 'next/link';

export default function BlogPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
			<div className="mx-auto w-full max-w-2xl space-y-6 text-center">
				<h1 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
					Blog
				</h1>
				<p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
					Coming soon...
				</p>
				<Link href="/" className="link-button mt-8 inline-block">
					{'← Back to Home'}
				</Link>
			</div>
		</main>
	);
}
