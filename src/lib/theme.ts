export const themeConfig = {
	light: 'atelier',
	dark: 'charcoal'
} as const satisfies Record<'light' | 'dark', string>;

export type ThemeName = 'atelier' | 'charcoal' | 'royal' | 'glamping';
