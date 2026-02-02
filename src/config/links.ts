export type LinkIcon =
	| 'projects'
	| 'x'
	| 'youtube'
	| 'github'
	| 'discord';

export interface Link {
	href: string;
	label: string;
	external?: boolean;
	icon?: LinkIcon;
}

export interface SocialLink {
	href?: string;
	label: string;
	icon:
		| 'x'
		| 'linkedin'
		| 'instagram'
		| 'github'
		| 'youtube'
		| 'link'
		| 'bluesky'
		| 'threads'
		| 'tiktok'
		| 'discord'
		| 'telegram'
		| 'spotify'
		| 'medium';
}

export const links: Link[] = [];

export const socialLinks: SocialLink[] = [
	{ label: 'X', icon: 'x', href: 'https://x.com' },
	{ label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
	{ label: 'GitHub', icon: 'github', href: 'https://github.com' },
	{ label: 'Discord', icon: 'discord', href: 'https://discord.com' },
];
