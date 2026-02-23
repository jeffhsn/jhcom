'use client'

import { Mail, Send } from 'lucide-react'

export default function InboxForm() {
	return (
		<div className="house-letterbox w-full">
			<div className="space-y-4">
				<div className="mb-2 flex flex-col items-center gap-2 text-center">
					<Mail className="h-6 w-6 shrink-0" style={{ color: 'var(--text-muted)' }} aria-hidden />
					<h3 className="house-letterbox-title text-lg font-semibold">
						Letter box
					</h3>
					<p className="house-letterbox-desc text-sm">
						Leave a letter and I’ll get back to you.
					</p>
				</div>
				<form className="space-y-3" action="#" method="post">
					<div>
						<label htmlFor="inbox-email" className="sr-only">
							Your email
						</label>
						<input
							id="inbox-email"
							name="email"
							type="email"
							placeholder="Your email"
							className="inbox-input"
							required
							aria-label="Your email"
						/>
					</div>
					<div>
						<label htmlFor="inbox-message" className="sr-only">
							Message
						</label>
						<textarea
							id="inbox-message"
							name="message"
							placeholder="Your message..."
							className="inbox-input min-h-[120px] resize-y"
							required
							aria-label="Message"
							rows={4}
						/>
					</div>
					<button type="submit" className="inbox-button">
						<span className="flex items-center justify-center gap-2">
							<Send className="h-5 w-5" />
							Send
						</span>
					</button>
				</form>
			</div>
		</div>
	)
}
