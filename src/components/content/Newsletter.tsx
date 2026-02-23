import { Mail } from 'lucide-react';

export default function Newsletter() {
	return (
		<div
			className="w-full rounded-xl p-6"
			style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
		>
			<div className="space-y-4">
				<div className="mb-2 text-center">
					<h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
						Stay Updated
					</h3>
					<p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
						Get the latest updates delivered to your inbox
					</p>
				</div>
				<form className="space-y-3">
					<div className="relative">
						<input
							type="email"
							placeholder="Enter your email"
							className="newsletter-input"
							required
							aria-label="Email address"
						/>
					</div>
					<button type="submit" className="newsletter-button">
						<span className="flex items-center justify-center gap-2">
							<Mail className="h-5 w-5" />
							Subscribe
						</span>
					</button>
				</form>
			</div>
		</div>
	);
}
