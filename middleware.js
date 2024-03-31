import createMiddleware from 'next-intl/middleware';
import {localePrefix, locales} from './lib/navigation';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales
});

export const config = {
  matcher: ['/', '/(en|ru)/:path*']
};
