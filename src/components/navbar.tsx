"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BookUser, HammerIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
    href: string;
    label: string;
    Icon: typeof HomeIcon;
};

const navItems: NavItem[] = [
    { href: "/", label: "Home", Icon: HomeIcon },
    { href: "/projects", label: "Projects", Icon: HammerIcon },
    { href: "/contact", label: "Contact", Icon: BookUser },
];

const Component = () => {
    const pathname = usePathname();

    return (
        <NavigationMenu
            viewport={false}
            className="fixed top-3 left-1/2 z-50 w-fit -translate-x-1/2 overflow-hidden rounded-full border border-foreground/10 bg-background/75 shadow-lg shadow-foreground/5 backdrop-blur-xl sm:top-4"
        >
            <NavigationMenuList className="gap-0">
                {navItems.map(({ href, label, Icon }, i) => {
                    const isActive =
                        href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(href);
                    const isFirst = i === 0;
                    const isLast = i === navItems.length - 1;

                    return (
                        <NavigationMenuItem key={href}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={cn(
                                        "inline-flex h-9 flex-row items-center gap-2 px-3.5 text-sm font-medium transition-colors duration-300 sm:px-4",
                                        isFirst
                                            ? "rounded-l-full"
                                            : isLast
                                              ? "rounded-r-full"
                                              : "rounded-none",
                                        isActive
                                            ? "bg-accent text-foreground"
                                            : "text-foreground/70 hover:bg-accent hover:text-foreground"
                                    )}
                                >
                                    <Icon
                                        className={cn(
                                            "size-4",
                                            isActive
                                                ? "text-foreground"
                                                : "text-foreground/50"
                                        )}
                                        aria-hidden="true"
                                    />
                                    <span>{label}</span>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Component;
