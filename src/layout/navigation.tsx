"use client";
import React, { useMemo } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { type Navigation, navigation } from "@/config";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  const active = (href: string) => {
    return pathname === href ? "bg-accent text-accent-foreground" : "";
  };

  return (
    <NavigationMenu className="w-full mt-2">
      <NavigationMenuList className="flex flex-wrap">
        {navigation.map((item) => (
          <MainItem key={item.title} item={item} active={active(item.href)} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const MainItem = ({ item, active }: { item: Navigation; active: string }) => {
  if (item.children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className={active}>
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {item.children?.map((child) => (
              <ListItem key={child.title} title={child.title} href={child.href}>
                {child.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link href={item.href} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle() + " " + active}
        >
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navigation;
