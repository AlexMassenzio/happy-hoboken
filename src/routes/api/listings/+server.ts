import listings from '$lib/data/listings';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return json(listings);
};
