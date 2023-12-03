import type { Offer } from './types/listing';

const valueToString: Record<number, string> = {
	0: 'Sunday',
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday'
};

export const convertDayToString = (dayOfWeekValue: number) => {
	return valueToString[dayOfWeekValue];
};

export const buildDateFromOffer = (offer: Offer) => {
	let builtString = '';

	//Build the day range
	builtString += convertDayToString(offer.startDay);

	if (offer.startDay != offer.endDay) {
		builtString += '-' + convertDayToString(offer.endDay);
	}

	//Build the hour range
	builtString += ' ' + (((offer.startHour - 1) % 12) + 1) + (offer.startHour <= 12 ? 'am' : 'pm');

	if (offer.startHour != offer.endHour) {
		builtString += '-' + (((offer.endHour - 1) % 12) + 1) + (offer.endHour <= 12 ? 'am' : 'pm');
	}

	return builtString;
};
