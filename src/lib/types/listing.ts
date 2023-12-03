export type Listing = {
	name: string;
	location: string;
	schedule: Offer[];
	links?: string[];
};

export type Offer = {
	startDay: number;
	endDay: number;
	startHour: number;
	endHour: number;
	description: string;
};
