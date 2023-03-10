'use client'

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(
        () => {
            setMounted(true);
        }, []
    );

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className="flex justify-end items-center col-span-2 md:col-span-1">
            {
                currentTheme === 'dark' ? (
                    <SunIcon
                        className='h-8 w-8 cursor-pointer text-yellow-400'
                        onClick={() => setTheme('light')}
                    />
                ) : (
                    <MoonIcon
                        className='h-8 w-8 cursor-pointer text-yellow-400'
                        onClick={() => setTheme('dark')}
                    />
                )
            }
        </div>
    );
}

export default ThemeButton;