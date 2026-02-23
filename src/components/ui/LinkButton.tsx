import Link from 'next/link';
import { ExternalLink, Briefcase, X, Youtube, Github, Disc } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LinkButtonProps {
	href: string;
	label: string;
	external?: boolean;
	icon?: string;
	className?: string;
}

const iconMap = {
	projects: Briefcase,
	x: X,
	youtube: Youtube,
	github: Github,
	discord: Disc,
};

export default function LinkButton({
	href,
	label,
	external = false,
	icon,
	className,
}: LinkButtonProps) {
	const Icon = icon ? iconMap[icon as keyof typeof iconMap] : null;
	const content = (
		<span className="relative z-10 flex items-center justify-center gap-2">
			{Icon ? <Icon className="link-button-icon h-5 w-5 shrink-0" /> : null}
			{label}
			{external && !Icon ? (
				<ExternalLink className="h-4 w-4 shrink-0 opacity-60" />
			) : null}
		</span>
	);

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cn('link-button', className)}
			>
				{content}
			</a>
		);
	}

	return (
		<Link href={href} className={cn('link-button', className)}>
			{content}
		</Link>
	);
}
