export interface Project {
	slug: string;
	title: string;
	description: string;
	image?: string;
	url?: string;
}

export const projects: Project[] = [];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
