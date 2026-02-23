import { cn } from '@/lib/utils';

interface SectionProps {
	className?: string;
	children: React.ReactNode;
}

export default function Section({ className, children }: SectionProps) {
	return <section className={cn(className)}>{children}</section>;
}
