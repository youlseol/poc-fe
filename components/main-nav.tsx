'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';

import { type MainNavItem } from 'types';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { Icons } from './icons';
import { MobileNav } from '@/components/mobile-nav';

interface MainNavProps {
    items?: MainNavItem[];
    children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                {/* <Icons.logo /> */}
                <Image src="/logo.svg" alt="220 Logo" width={100} height={24} priority />
                {/* <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span> */}
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? '#' : item.href}
                            className={cn(
                                'flex items-center text-lg font-semibold text-slate-600 sm:text-sm bg-[#682C78]',
                                item.href.startsWith(`/${segment}`) && 'text-slate-900',
                                item.disabled && 'cursor-not-allowed opacity-80'
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => {
                    setShowMobileMenu(!showMobileMenu);
                }}
            >
                {/* {showMobileMenu ? <Icons.close /> : <Icons.logo />} */}
                {showMobileMenu ? <Icons.close /> : <Image src="/logo.svg" alt="220 Logo" width={100} height={24} priority />}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && <MobileNav items={items}>{children}</MobileNav>}
        </div>
    );
}
