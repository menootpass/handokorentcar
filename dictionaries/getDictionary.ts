export type Locale = 'en' | 'id';

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('./en.json').then((mod) => mod.default),
  id: () => import('./id.json').then((mod) => mod.default),
};

export const getDictionary = async (locale: string): Promise<any> => {
  const validLocale = locale === 'id' ? 'id' : 'en';
  return dictionaries[validLocale]();
};
