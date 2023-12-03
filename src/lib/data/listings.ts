import type { Listing } from '$lib/types/listing';

import stingrayHappyHour from '$lib/assets/images/stingray.png';

const listings: Listing[] = [
	{
		name: 'Stingray Lounge',
		location: 'https://maps.app.goo.gl/4C7uAeHUenSEcvM2A',
		schedule: [
			{
				startDay: 0,
				endDay: 0,
				startHour: 13,
				endHour: 15,
				description: '50% Off Oysters & Sparkling Wine'
			},
			{
				startDay: 1,
				endDay: 3,
				startHour: 16,
				endHour: 18,
				description: '50% Off Oysters & Sparkling Wine'
			},
			{
				startDay: 4,
				endDay: 4,
				startHour: 16,
				endHour: 18,
				description: '$18 Lobster Rolls & 50% Off Beer'
			},
			{
				startDay: 5,
				endDay: 5,
				startHour: 16,
				endHour: 18,
				description: '$10 House Cocktails'
			},
			{
				startDay: 6,
				endDay: 6,
				startHour: 15,
				endHour: 17,
				description: '$10 House Cocktails'
			}
		],
		links: [stingrayHappyHour]
	}
];

export default listings;
