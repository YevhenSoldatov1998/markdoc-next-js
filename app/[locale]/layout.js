import "../globals.css";
import {ThemeProvider} from "@/shared/provider";
import {cn} from "@/lib/utils"
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import {unstable_setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider, useMessages} from "next-intl";
import Header from "@/components/header";
import React from "react";


export const metadata = {
  title: "Data science blog",
  description: "Your go-to source for data science articles and tutorials.",
};


const locales = ['en', 'ru'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}


export default function RootLayout({
                                     children,
                                     params: {locale}
                                   }) {

  unstable_setRequestLocale(locale);
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
        <main>
          <Header/>
          <div className='container pt-8 relative z-1'>
            {children}
          </div>
        </main>
      </ThemeProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
