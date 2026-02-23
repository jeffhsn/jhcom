'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { useAuth } from '@clerk/nextjs';

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const convexClient = convexUrl ? new ConvexReactClient(convexUrl) : null;
const clerkEnabled = Boolean(clerkPublishableKey);

export default function Providers({ children }: { children: React.ReactNode }) {
	let content = children;

	if (convexClient && clerkEnabled) {
		content = (
			<ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
				{content}
			</ConvexProviderWithClerk>
		);
	} else if (convexClient) {
		content = <ConvexProvider client={convexClient}>{content}</ConvexProvider>;
	}

	if (clerkEnabled) {
		return <ClerkProvider publishableKey={clerkPublishableKey}>{content}</ClerkProvider>;
	}

	return <>{content}</>;
}
