import listings from '$lib/data/lilstings';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return json(listings);
};
