export default function PrivateHome() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
			<h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
				Inside the house
			</h1>
			<p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
				Your private rooms will live here.
			</p>
		</main>
	);
}
