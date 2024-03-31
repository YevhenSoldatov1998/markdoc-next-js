"use client"

import * as React from "react"
import {useTransition} from "react"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {useLocale} from "next-intl";
import {locales, usePathname, useRouter} from "@/lib/navigation";
import {cn} from "@/lib/utils";


export function LocaleToggle() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function changeLocale(nextLocale) {
    if (locale === nextLocale) return
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
      router.refresh()
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {locale.toLocaleUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((nextLocale) => (
          <DropdownMenuItem
            disabled={isPending}
            key={nextLocale}
                            className={cn({'cursor-not-allowed pointer-events-none opacity-50': nextLocale === locale})}
                            onClick={() => changeLocale(nextLocale)}>
            {nextLocale?.toLocaleUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
