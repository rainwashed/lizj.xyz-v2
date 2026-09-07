import { Icon } from "@iconify/react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

type Contact = {
    username: string;
    platform: string;
    iconifyIcon: string;
    href: string;
};

const personalContacts: Contact[] = [
    {
        username: "李",
        platform: "YouTube",
        iconifyIcon: "lucide:youtube",
        href: "https://youtube.com/@rainwashedz",
    },
    {
        username: "rainwashed",
        platform: "GitHub",
        iconifyIcon: "lucide:github",
        href: "https://github.com/rainwashed",
    },
    {
        username: "rainwshd",
        platform: "Gravatar",
        iconifyIcon: "simple-icons:gravatar",
        href: "https://gravatar.com/rainwshd",
    },
    {
        username: "mynameisli",
        platform: "LinkedIn",
        iconifyIcon: "lucide:linkedin",
        href: "https://www.linkedin.com/in/mynameisli",
    },
    {
        username: "rainwashed",
        platform: "XDA Developers",
        iconifyIcon: "simple-icons:xdadevelopers",
        href: "https://xdaforums.com/m/rainwashed.12943091",
    },
    {
        username: "rainwshd",
        platform: "Twitter",
        iconifyIcon: "lucide:twitter",
        href: "https://x.com/rainwshd",
    },
    {
        username: "li@lizj.xyz",
        platform: "Email",
        iconifyIcon: "lucide:mail",
        href: "mailto:li@lizj.xyz",
    },
    {
        username: "ra1n@waifu.club",
        platform: "Email",
        iconifyIcon: "lucide:mail",
        href: "mailto:ra1n@waifu.club",
    },
];

const isExternal = (href: string) => href.startsWith("http");

const Component = () => (
    <div className="relative isolate overflow-hidden">
        <div
            aria-hidden
            className="bg-dot-grid mask-fade-bottom pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem]"
        />
        <main className="mx-auto flex min-h-svh w-full max-w-4xl flex-col items-center justify-center px-4 py-28 sm:px-6 md:py-32">
            <div className="w-full">
                <div className="mb-10 flex items-center justify-center gap-4 md:mb-14">
                    <span aria-hidden className="h-px flex-1 bg-foreground/10" />
                    <h1 className="text-center text-2xl font-semibold tracking-tight whitespace-nowrap sm:text-3xl">
                        My contacts/socials:
                    </h1>
                    <span aria-hidden className="h-px flex-1 bg-foreground/10" />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                    {personalContacts.map((contact, i) => (
                        <HoverCard key={i} openDelay={120} closeDelay={100}>
                            <HoverCardTrigger asChild>
                                <Link
                                    href={contact.href}
                                    target={isExternal(contact.href) ? "_blank" : undefined}
                                    rel={
                                        isExternal(contact.href)
                                            ? "noreferrer noopener"
                                            : undefined
                                    }
                                    aria-label={contact.platform}
                                    className="group flex min-h-20 items-center gap-4 rounded-2xl border border-foreground/10 bg-background/70 px-5 py-4 backdrop-blur-sm transition-all duration-300 outline-none hover:-translate-y-1 hover:border-foreground/30 hover:bg-background hover:shadow-xl hover:shadow-foreground/5 focus-visible:ring-2 focus-visible:ring-ring/40"
                                >
                                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-foreground/10 bg-background transition-transform duration-300 group-hover:scale-110 group-hover:border-foreground/30">
                                        <Icon
                                            icon={contact.iconifyIcon}
                                            className="size-5 text-foreground/80"
                                        />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block truncate text-sm font-medium sm:text-base">
                                            {contact.username}
                                        </span>
                                    </span>
                                </Link>
                            </HoverCardTrigger>
                            <HoverCardContent
                                sideOffset={10}
                                className="w-fit rounded-full border-foreground/10 px-3 py-1 text-xs font-medium shadow-md backdrop-blur-xl"
                            >
                                {contact.platform}
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </main>
    </div>
);

export default Component;
