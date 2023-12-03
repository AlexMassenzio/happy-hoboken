import { test, describe, expect } from 'vitest';
import type { Offer } from './types/listing';
import { buildDateFromOffer } from './offerUtils';

describe('buildDateFromOffer()', () => {
	test('should take in unique days and hours and format them to a string', () => {
		const testData: Offer = {
			description: 'test',
			startDay: 1,
			endDay: 3,
			startHour: 16,
			endHour: 18
		};

		expect(buildDateFromOffer(testData)).toBe('Monday-Wednesday 4pm-6pm');
	});

	test('should account for the same day being used for the start and end', () => {
		const testData: Offer = {
			description: 'test',
			startDay: 4,
			endDay: 4,
			startHour: 16,
			endHour: 18
		};

		expect(buildDateFromOffer(testData)).toBe('Thursday 4pm-6pm');
	});

	test('should account for the same hour being used for the start and end', () => {
		const testData: Offer = {
			description: 'test',
			startDay: 1,
			endDay: 3,
			startHour: 16,
			endHour: 16
		};

		expect(buildDateFromOffer(testData)).toBe('Monday-Wednesday 4pm');
	});
});
