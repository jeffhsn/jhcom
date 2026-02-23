import Avatar from '@/components/ui/Avatar'
import Footer from '@/components/layout/Footer'
import InboxForm from '@/components/content/InboxForm'
import HouseDoor from '@/components/content/HouseDoor'
import FadeIn from '@/components/motion/FadeIn'

export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col items-center w-full">
			<div className="page-bg" aria-hidden />
			<div
				className="gbc-column min-h-screen w-full max-w-2xl mx-auto flex flex-col items-center px-4 py-12 border-x border-[var(--border-color)]"
				style={{ backgroundColor: 'var(--bg-secondary)' }}
			>
				<div className="w-full max-w-xl mx-auto space-y-6 text-center pt-4">
					<FadeIn>
						<div className="house-nameplate space-y-3">
							<div className="flex justify-center">
								<Avatar
									src="/jh-logo-black.jpeg"
									alt="Jafar Hussein"
									className="w-24 h-24"
									unoptimized
								/>
							</div>
							<h1
								className="text-3xl font-bold"
								style={{ color: 'var(--text-primary)' }}
							>
								Jafar Hussein
							</h1>
						</div>
					</FadeIn>

					<FadeIn delay={0.08}>
						<HouseDoor />
					</FadeIn>

					<FadeIn delay={0.14}>
						<InboxForm />
					</FadeIn>

					<FadeIn delay={0.2}>
						<Footer />
					</FadeIn>
				</div>
			</div>
		</main>
	)
}
