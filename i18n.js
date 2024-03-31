import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = process.env.NEXT_PUBLIC_LOCALES.split(',');

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
