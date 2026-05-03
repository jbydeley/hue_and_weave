export type HexColor = `#${string}`;

export type Product = {
	name: string;
	price: string;
	colors: [HexColor, HexColor, HexColor];
};

export type Collection = {
	id: string;
	name: string;
	sub: string;
	color: HexColor;
	bg: `var(--${string})`;
	products: [Product, Product, Product];
};

export const collections = [
	{
		id: 'soleil',
		name: 'Soleil',
		sub: 'Warm tones, gathered at noon.',
		color: '#C17B3A',
		bg: 'var(--soleil-bg)',
		products: [
			{ name: 'Abricot', price: '$0.50', colors: ['#C17B3A', '#E0A26A', '#F2D7AB'] },
			{ name: 'Miel', price: '$0.50', colors: ['#9C5E29', '#D89351', '#EFC084'] },
			{ name: 'Curcuma', price: '$0.50', colors: ['#B6692C', '#E89B47', '#F4D08A'] }
		]
	},
	{
		id: 'foret',
		name: 'Forêt',
		sub: 'The hush of leaves after rain.',
		color: '#4A8B7A',
		bg: 'var(--foret-bg)',
		products: [
			{ name: 'Mousse', price: '$0.50', colors: ['#4A8B7A', '#7CB0A1', '#B5D4C9'] },
			{ name: 'Sauge', price: '$0.50', colors: ['#3F7568', '#6FA192', '#A9C7BC'] },
			{ name: 'Eucalypt', price: '$0.50', colors: ['#5A9A87', '#8FB9AC', '#C2DACF'] }
		]
	},
	{
		id: 'crepuscule',
		name: 'Crépuscule',
		sub: 'The hour before the lamps come on.',
		color: '#7B6AAF',
		bg: 'var(--crepuscule-bg)',
		products: [
			{ name: 'Iris', price: '$0.50', colors: ['#7B6AAF', '#A092C5', '#CCC2DD'] },
			{ name: 'Lavande', price: '$0.50', colors: ['#6C5C9F', '#9286BC', '#C0B6D6'] },
			{ name: 'Brume', price: '$0.50', colors: ['#8A7CB9', '#B0A6CD', '#D8D1E4'] }
		]
	},
	{
		id: 'rose',
		name: 'Rosé',
		sub: 'A blush, considered.',
		color: '#D4537E',
		bg: 'var(--rose-bg)',
		products: [
			{ name: 'Pivoine', price: '$0.50', colors: ['#D4537E', '#E489A5', '#F2BFCE'] },
			{ name: 'Cerise', price: '$0.50', colors: ['#C04270', '#DA7A98', '#EDB1C2'] },
			{ name: 'Aurore', price: '$0.50', colors: ['#DD6B92', '#EE9CB7', '#F8CDD7'] }
		]
	}
] as const satisfies [Collection, ...Collection[]];
