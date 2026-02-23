export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-auto pt-8">
			<div className="text-center text-sm space-y-2" style={{ color: 'var(--text-muted)' }}>
				<p>&copy; {currentYear} All rights reserved.</p>
				<p>
					<a href="/imprint" className="hover:underline" style={{ color: 'inherit' }}>
						Imprint
					</a>
					<span className="mx-2">·</span>
					<a href="/privacy" className="hover:underline" style={{ color: 'inherit' }}>
						Privacy
					</a>
				</p>
			</div>
		</footer>
	);
}
