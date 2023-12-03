import type { Listing } from '$lib/types/listing';

const listings: Listing[] = [
    {
        name: "Stingray Lounge",
        location: "https://maps.app.goo.gl/4C7uAeHUenSEcvM2A",
        schedule: [
            {
                startDay: 4,
                endDay: 4,
                startHour: 16,
                endHour: 18,
                description: "$18 Lobster Rolls & 50% Off Beer"
            }
        ]
    }
];

export default listings;
