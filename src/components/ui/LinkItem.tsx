import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LinkItemProps {
	href: string;
	className?: string;
	children: React.ReactNode;
}

export default function LinkItem({ href, className, children }: LinkItemProps) {
	return (
		<Link href={href} className={cn('text-blue-600 hover:text-blue-800 underline', className)}>
			{children}
		</Link>
	);
}
