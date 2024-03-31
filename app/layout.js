import "./globals.css";
import {ThemeProvider} from "@/shared/provider";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {cn} from "@/lib/utils"
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";


export const metadata = {
  title: "Data science blog",
  description: "Your go-to source for data science articles and tutorials.",
};



export default function RootLayout({
                                     children,
                                     params: {locale = 'en'}
                                   }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        GeistSans.variable,
        GeistMono.variable,
        GeistSans.className
      )}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
