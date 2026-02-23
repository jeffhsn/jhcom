import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarProps {
	src: string;
	alt: string;
	className?: string;
	/** 'full' (default) | 'lg' | 'none' for logo-style display */
	rounded?: 'full' | 'lg' | 'none';
	/** Bypass Next.js image optimizer (e.g. for Cursor browser compatibility) */
	unoptimized?: boolean;
}

const roundedClasses = {
	full: 'rounded-full',
	lg: 'rounded-lg',
	none: 'rounded-none',
};

export default function Avatar({
	src,
	alt,
	className,
	rounded = 'full',
	unoptimized = false,
}: AvatarProps) {
	return (
		<Image
			src={src}
			alt={alt}
			width={96}
			height={96}
			unoptimized={unoptimized}
			className={cn('border-2', roundedClasses[rounded], className)}
			style={{ borderColor: 'var(--border-color)' }}
		/>
	);
}
