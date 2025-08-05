"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useLenis } from "lenis/react";
import { BookUser, HammerIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Renamed Component to Navbar for clarity and following conventions
const Component = () => {
    const [scrollValue, setScrollValue] = useState(false);
    useLenis((lenis) => {
        if (lenis.scroll > 30 && !scrollValue) {
            setScrollValue(true);
        } else {
            setScrollValue(false);
        }
    });

    return (
        <NavigationMenu
            className={`fixed top-4 left-1/2 -translate-x-1/2 md:translate-none md:left-[calc(100vw-20rem)] z-50 border rounded-md border-foreground/20 ${scrollValue
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
                } transition-opacity w-fit backdrop-blur-3xl`}
        >
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/"
                            className="inline-flex flex-row items-center space-x-1"
                        >
                            <HomeIcon className="w-4 h-4 mr-2" />{" "}
                            {/* Adjusted icon size and spacing */}
                            <span>Home</span>
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/projects"
                            className="inline-flex flex-row items-center space-x-1"
                        >
                            <HammerIcon className="w-4 h-4 mr-2" />{" "}
                            {/* Adjusted icon size and spacing */}
                            <span>Projects</span>
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/contact"
                            className="inline-flex flex-row items-center space-x-1"
                        >
                            <BookUser className="w-4 h-4 mr-2" />{" "}
                            {/* Adjusted icon size and spacing */}
                            <span>Contact</span>
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Component;
