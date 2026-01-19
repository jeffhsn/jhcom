export interface Link {
	href: string;
	label: string;
}

export const links: Link[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/notes', label: 'Notes' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/gigs', label: 'Gigs' },
];
