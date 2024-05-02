"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavItem({ href, children }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window && window?.location?.pathname === href) {
      setIsActive(true);
    }
  }, [href]);

  return (
    <NavigationMenuItem className="w-[90%] h-12">
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} bg-transparent gap-2 !w-full !justify-start ${
            isActive && "!bg-accent !text-accent-foreground"
          }`}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
