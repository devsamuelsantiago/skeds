'use client';
import { Button } from '@/common/components/ui/button';
import { ChevronLeftIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

type HeaderProps = {
  withoutBack?: boolean;
  sidebarOpen?: () => void;
};

export function Header({ withoutBack = false, sidebarOpen }: HeaderProps) {
  const { back } = useRouter();

  return (
    <header className="flex items-center justify-between top-0 left-0 absolute p-2 gap-4 w-full">
      <div>
        {sidebarOpen && (
          <Button onClick={sidebarOpen} variant="link" className="roundend-md md:hidden">
            <HamburgerMenuIcon width={20} height={20} />
          </Button>
        )}
        {!withoutBack && (
          <Button onClick={() => back()} variant="link" className="roundend-md">
            <ChevronLeftIcon width={20} height={20} />
          </Button>
        )}
      </div>
      {/* {user && (
        <Button onClick={exit} variant="link" className="roundend-md">
          <ExitIcon width={16} height={16} />
        </Button>
      )} */}
    </header>
  );
}
