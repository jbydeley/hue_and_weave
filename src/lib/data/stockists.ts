export type StockistStatus = 'in-stock' | 'sold-out';

export type Stockist = {
	city: string;
	place: string;
	country: string;
	x: number;
	y: number;
	status: StockistStatus;
};

export const stockists = [
	{ city: 'Stayner', place: 'Evangelical Camp — Scott St', country: 'CA', x: 200, y: 245, status: 'in-stock' },
	{ city: 'London', place: 'Liberty — Carnaby', country: 'UK', x: 470, y: 188, status: 'sold-out' },
	{ city: 'New York', place: 'Bergdorf Goodman — 5th Ave', country: 'US', x: 230, y: 260, status: 'sold-out' },
	{ city: 'Paris', place: 'Le Bon Marché — Rive Gauche', country: 'FR', x: 510, y: 220, status: 'sold-out' },
	{ city: 'Tokyo', place: 'Isetan — Shinjuku', country: 'JP', x: 870, y: 270, status: 'sold-out' },
	{ city: 'Copenhagen', place: 'Stilleben — Frederiksberggade', country: 'DK', x: 545, y: 168, status: 'sold-out' },
	{ city: 'Melbourne', place: 'Craft Victoria', country: 'AU', x: 855, y: 470, status: 'sold-out' }
] as const satisfies [Stockist, ...Stockist[]];
