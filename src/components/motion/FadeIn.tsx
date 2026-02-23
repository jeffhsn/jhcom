'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

interface FadeInProps extends PropsWithChildren {
	delay?: number;
	className?: string;
}

export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
}
