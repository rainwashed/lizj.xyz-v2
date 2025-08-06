import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCardContent } from "@radix-ui/react-hover-card";

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

const OutlineLinkButton: React.FC<Contact> = (props) => (
    <Link href={props.href} target="_blank">
        <Button variant="link" className="flex items-center min-w-40 ">
            <span>
                <Icon icon={props.iconifyIcon}></Icon>
            </span>
            <span>{props.username}</span>
        </Button>
    </Link >
);

const Component = () => (
    <>

        <div className="min-h-screen flex flex-col items-center justify-center p-4 max-w-screen">
            <h1 className="text-2xl md:text-3xl mb-4 text-center">My contacts/socials:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center p-4 border border-foreground/20 rounded-md">
                {personalContacts.map((contact, i) => (
                    <span key={i}>
                        <OutlineLinkButton href={contact.href} iconifyIcon={contact.iconifyIcon} platform={contact.platform} username={contact.username} />
                    </span>
                ))}
            </div>
        </div>
        <div className="h-20">

        </div>
    </>
);
export default Component;
