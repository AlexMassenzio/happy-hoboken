import type { Listing } from '$lib/types/listing';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/listings');
	const listings: Listing[] = await res.json();
	return { listings };
}) satisfies PageLoad;
