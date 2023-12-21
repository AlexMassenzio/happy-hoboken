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
	},
	{
		name: 'Dear Maud',
		location: 'https://maps.app.goo.gl/DYp6d3N72xs4ZeBy8',
		schedule: [
			{
				startDay: 1,
				endDay: 5,
				startHour: 16,
				endHour: 19,
				description: 'Happy Hour'
			},
			{
				startDay: 0,
				endDay: 0,
				startHour: 16,
				endHour: 2,
				description: 'Steak, Fish, & Chicken Tacos - $3.50ea. | Paloma - $9.00'
			},
			{
				startDay: 1,
				endDay: 1,
				startHour: 16,
				endHour: 2,
				description: 'Bao Buns - $3.00 | Margaritas - $9.00'
			},
			{
				startDay: 2,
				endDay: 2,
				startHour: 16,
				endHour: 2,
				description: 'Half Price Bottles of Wine (excl. Whispering Angel).'
			},
			{
				startDay: 3,
				endDay: 3,
				startHour: 16,
				endHour: 2,
				description: 'Any Flatbread & Glass of House Wine $22.00.'
			},
			{
				startDay: 4,
				endDay: 4,
				startHour: 16,
				endHour: 2,
				description: 'Rose Pickled Dirty Martini & Cheese or Meat Board $24'
			}
		],
		links: ['https://dearmaud.com/hoboken-dear-maud-happy-hours-specials']
	}
];

export default listings;
