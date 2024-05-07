'use client';
import { Button } from '@/common/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex items-center justify-end top-0 sticky p-2 gap-4">
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant="ghost" className="roundend-md">
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  );
}
