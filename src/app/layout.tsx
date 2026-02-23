import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Personal link page',
	icons: {
		icon: '/jh-logo-black.jpeg',
		apple: '/jh-logo-black.jpeg',
	},
	themeColor: '#1a0a2e',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="min-h-full">
			<body className="text-white min-h-screen antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
