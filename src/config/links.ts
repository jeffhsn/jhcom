export interface Link {
	href: string;
	label: string;
	external?: boolean;
}

export const links: Link[] = [
	{ href: '/projects', label: 'Projects' },
	{ href: '/blog', label: 'Blog' },
	// Add more links here as needed
	// Example: { href: 'https://twitter.com/yourhandle', label: 'Twitter', external: true },
];
