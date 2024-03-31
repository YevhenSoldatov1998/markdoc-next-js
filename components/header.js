'use client'

import React from 'react';
import {ThemeToggle} from "@/components/theme-toggle";
import {LocaleToggle} from "@/components/locale-toggle";
import {Link} from "@/lib/navigation";
import {RocketIcon} from "@radix-ui/react-icons";
import {useTranslations} from "next-intl";

const Header = async () => {

  const t = useTranslations();
  return (
    <header className='flex justify-between items-center py-4 sticky top-0 bg-background z-10 container'>
      <Link
        className='font-normal text-lg flex items-center gap-2'
        href="/"><RocketIcon width={20} height={20}/>
        Logo</Link>

      <Link href={`/about`} className='text-sm font-medium underline underline-offset-1 '>{t('About.title')}</Link>
      <div className='flex items-center gap-2'>
        <ThemeToggle t={t}/>
        <LocaleToggle/>
      </div>
    </header>
  );
};

export default Header;