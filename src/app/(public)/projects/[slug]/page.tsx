import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/lib/projects';

interface ProjectPageProps {
	params: { slug: string };
}

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
	const project = getProject(params.slug);

	if (!project) {
		notFound();
	}

	return (
		<main className="flex min-h-screen flex-col items-center px-4 py-12">
			<div
				className="gbc-column mx-auto w-full max-w-2xl space-y-6 border-x border-[var(--border-color)] px-4 py-8"
				style={{
					backgroundColor: 'var(--bg-secondary)',
					color: 'var(--text-primary)',
					minHeight: '100vh',
				}}
			>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">{project.title}</h1>
					<Link href="/" className="text-sm transition-colors hover:underline" style={{ color: 'var(--text-muted)' }}>
						{'← Back to Home'}
					</Link>
				</div>

				{project.image ? (
					<img
						src={project.image}
						alt=""
						className="w-full rounded-lg object-cover"
						style={{ maxHeight: 240 }}
					/>
				) : null}

				<p className="text-sm" style={{ color: 'var(--text-muted)' }}>
					{project.description}
				</p>

				{project.url ? (
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block rounded-lg px-4 py-2 text-sm font-medium transition-colors"
						style={{ backgroundColor: 'var(--accent-color)', color: '#fff' }}
					>
						{'Visit project →'}
					</a>
				) : null}
			</div>
		</main>
	);
}
