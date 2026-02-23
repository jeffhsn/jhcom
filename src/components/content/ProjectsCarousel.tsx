'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/lib/projects';

interface ProjectsCarouselProps {
	projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const didDrag = useRef(false);
	const startX = useRef(0);
	const startScrollLeft = useRef(0);

	useEffect(() => {
		const scrollEl = scrollRef.current;
		if (!scrollEl) return;

		const onMouseMove = (event: MouseEvent) => {
			if (!isDragging.current) return;
			didDrag.current = true;
			scrollEl.scrollLeft = startScrollLeft.current - (event.clientX - startX.current);
		};

		const onMouseUp = () => {
			if (!isDragging.current) return;
			isDragging.current = false;
			scrollEl.style.cursor = '';
			scrollEl.style.userSelect = '';
		};

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseup', onMouseUp);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
		};
	}, []);

	const handleMouseDown = (event: React.MouseEvent) => {
		const scrollEl = scrollRef.current;
		if (!scrollEl) return;
		isDragging.current = true;
		didDrag.current = false;
		startX.current = event.clientX;
		startScrollLeft.current = scrollEl.scrollLeft;
		scrollEl.style.cursor = 'grabbing';
		scrollEl.style.userSelect = 'none';
		event.preventDefault();
	};

	const handleClickCapture = (event: React.MouseEvent) => {
		if (didDrag.current) {
			event.preventDefault();
			event.stopPropagation();
			didDrag.current = false;
		}
	};

	const scrollByStep = (direction: 'left' | 'right') => {
		const scrollEl = scrollRef.current;
		if (!scrollEl) return;
		const step = 224;
		scrollEl.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
	};

	return (
		<div className="relative w-full">
			<div
				ref={scrollRef}
				className="carousel-scroll w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory"
				onMouseDown={handleMouseDown}
				onClickCapture={handleClickCapture}
			>
				<div className="flex flex-nowrap gap-4 pb-2 px-4 min-w-min">
					{projects.map((project) => (
						<Link
							key={project.slug}
							href={`/projects/${project.slug}`}
							className="project-card flex min-w-[200px] max-w-[200px] shrink-0 flex-col rounded-lg border transition-colors hover:border-[var(--border-hover)] snap-center snap-always"
							style={{
								backgroundColor: '#1a1a1a',
								borderColor: 'var(--border-color)',
								padding: '1rem 1.25rem',
							}}
						>
							{project.image ? (
								<img
									src={project.image}
									alt=""
									className="mb-3 h-24 w-full rounded object-cover"
								/>
							) : (
								<div
									className="mb-3 h-24 w-full rounded flex items-center justify-center text-2xl"
									style={{ background: 'var(--border-color)', color: 'var(--text-muted)' }}
								>
									{project.title.charAt(0)}
								</div>
							)}
							<h2 className="font-semibold text-sm truncate" style={{ color: 'var(--text-primary)' }}>
								{project.title}
							</h2>
						</Link>
					))}
				</div>
			</div>
			<button
				type="button"
				aria-label="Previous projects"
				onClick={() => scrollByStep('left')}
				className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-[var(--hover-bg)]"
				style={{
					backgroundColor: 'var(--bg-secondary)',
					borderColor: 'var(--border-color)',
					color: 'var(--text-primary)',
				}}
			>
				<ChevronLeft className="w-5 h-5" />
			</button>
			<button
				type="button"
				aria-label="Next projects"
				onClick={() => scrollByStep('right')}
				className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-[var(--hover-bg)]"
				style={{
					backgroundColor: 'var(--bg-secondary)',
					borderColor: 'var(--border-color)',
					color: 'var(--text-primary)',
				}}
			>
				<ChevronRight className="w-5 h-5" />
			</button>
		</div>
	);
}
