import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Icon } from "@iconify/react";

type Action = {
    iconifyIcon: string;
    href: string;
    text: string;
};
type PersonalProject = {
    projectName: string;
    projectDescription: string;
    tags: string[];
    actions?: Action[];
};

type ContributionProject = {
    projectName: string;
    projectDescription: string;
    projectStarCount: string;
    personalContributionDescription: string;
    actions?: Action[];
};

const personalProjects: PersonalProject[] = [
    {
        projectName: "ddnsu & ddnsu-go",
        projectDescription:
            "Dynamic domain name server updater is a program that automatically detects the system's machine and updates the corresponding Cloudflare records. The point of the project was to have a method for homelab users (who do not have a static IP) to still have automatic DNS updates.",
        tags: ["typescript", "bunjs", "golang", "github actions"],
        actions: [
            {
                href: "https://github.com/rainwashed/ddnsu",
                iconifyIcon: "lucide:github",
                text: "ddnsu",
            },
            {
                href: "https://github.com/rainwashed/ddnsu-go",
                iconifyIcon: "lucide:github",
                text: "ddnsu-go",
            },
            {
                href: "https://www.youtube.com/playlist?list=PLPo2MF-ROwpMdqDBnIs8zEA55xB9VpMQg",
                iconifyIcon: "lucide:youtube",
                text: "Go Series 1",
            },
        ],
    },
    {
        projectName: "ssredirect",
        projectDescription:
            "Stupidly simple redirect is a simple redirector service that works like TinyURL. It allows for shortened links that can be easier to type and remember.",
        tags: ["vue", "elysia.js", "typescript", "docker", "bunjs", "sql"],
        actions: [
            {
                href: "https://github.com/rainwashed/ssredirect",
                iconifyIcon: "lucide:github",
                text: "ssredirect",
            },
            {
                href: "https://www.youtube.com/watch?v=VBEi_Zi-QIQ",
                iconifyIcon: "lucide:youtube",
                text: "ssredirect trailer",
            },
            {
                href: "https://www.youtube.com/watch?v=eJMArKwGEOU",
                iconifyIcon: "lucide:youtube",
                text: "ssredirect technical details",
            },
        ],
    },
    {
        projectName: "wtt",
        projectDescription:
            "Windows Terminal terminal is a CLI tool to download themes for the new Windows Terminal. The project is very old and likely no longer functions.",
        tags: ["nodejs"],
        actions: [
            {
                href: "https://github.com/rainwashed/wtt",
                iconifyIcon: "lucide:github",
                text: "wtt",
            },
        ],
    },
    {
        projectName: "chalk-flags",
        projectDescription:
            "Easily declare Chalk.js color styles inside the text itself. Chalk.js is a terminal text styling library which can style text in terminals, and chalk-flags would introduce flags that can be put at the start of a string to stylize it instead of having to call the library itself. This is another old project.",
        tags: ["javascript", "npm"],
        actions: [
            {
                href: "https://github.com/rainwashed/chalk-flags",
                iconifyIcon: "lucide:github",
                text: "chalk-flags",
            },
            {
                href: "https://www.npmjs.com/package/chalk-flags",
                iconifyIcon: "mdi:npm",
                text: "chalk-flags on npm",
            },
        ],
    },
    {
        projectName: "osus!",
        projectDescription:
            "osus! is a website that can generate a Spotify playlist based on an osu! profile and their beatmap activity. The project is a full-stack application using Nuxt and also has markdown integration. The project uses modern authentication protocols such as OAuth 2.0.",
        tags: ["oauth", "nuxt", "vue", "markdown", "docker", "cloudflare"],
        actions: [
            {
                href: "https://osus.rainwashed.xyz/",
                iconifyIcon: "lucide:globe",
                text: "live page",
            },
            {
                href: "https://github.com/rainwashed/osus",
                iconifyIcon: "lucide:github",
                text: "osus",
            },
            {
                href: "https://www.youtube.com/watch?v=a9DGXeeX5_k",
                iconifyIcon: "lucide:youtube",
                text: "Spotify's API changes harm everyone",
            },
            {
                href: "https://www.youtube.com/watch?v=XYaSTqbHUbw",
                iconifyIcon: "lucide:youtube",
                text: "Bypassing the Spotify API restrictions",
            },
        ],
    },
    {
        projectName: "osu!xtractr",
        projectDescription:
            "osu!xtractor reads locally saved beatmaps and extracts their audio files to be used in something like an MP3 player.",
        tags: ["wails", "golang", "vue"],
        actions: [
            {
                href: "https://github.com/rainwashed/osuxtractr/tree/alpha",
                iconifyIcon: "lucide:github",
                text: "osuxtractr",
            },
        ],
    },
    {
        projectName: "Nurture",
        projectDescription:
            "Nurture is a Flutter app that uses Open Food Facts data and the device's camera to scan UPC barcodes to alert a user if it triggers any allergens.",
        tags: ["dart", "flutter"],
        actions: [
            {
                href: "https://nurture.rainworks.club",
                iconifyIcon: "lucide:globe",
                text: "landing page",
            },
            {
                href: "https://github.com/RainWorks-Software/Nurture",
                iconifyIcon: "lucide:github",
                text: "Nurture",
            },
            /* upload app to play store eventually */
        ],
    },
    {
        projectName: "openfooddataset",
        projectDescription:
            "My own API interface for the data provided by Open Food Facts, an open, collaborative, and free dataset for food products.",
        tags: ["typescript", "elysia.js", "docker"],
        actions: [
            {
                href: "https://github.com/RainWorks-Software/openfooddataset",
                iconifyIcon: "lucide:github",
                text: "openfooddataset",
            },
        ],
    },
    {
        projectName: "rainworks.club",
        projectDescription:
            "The website for my GitHub organization, RainWorks Software and Intelligence, shortened to rainworks.club.",
        tags: ["nextjs", "react", "typescript", "vercel"],
        actions: [
            {
                href: "https://rainworks.club",
                iconifyIcon: "lucide:globe",
                text: "landing page",
            },
            {
                href: "https://github.com/rainwashed/rainworks.club",
                iconifyIcon: "lucide:github",
                text: "rainworks.club",
            },
        ],
    },
    {
        projectName: "lizj.xyz",
        projectDescription: "The website you are currently on.",
        tags: ["nextjs", "react", "typescript", "vercel"],
        actions: [
            {
                href: "https://lizj.xyz",
                iconifyIcon: "lucide:globe",
                text: "landing page",
            },
            {
                href: "https://github.com/rainwashed/lizj.xyz-v2/tree/alpha",
                iconifyIcon: "lucide:github",
                text: "lizj.xyz-v2",
            },
        ],
    },
];

const contributions: ContributionProject[] = [
    {
        projectName: "MikuMikuBeam",
        projectDescription:
            "It is an open-source network stressor tool with a cute Hatsune Miku theme. The tool tests networks resilience to DOS and DDOS attacks by simulating multiple thousand concurrent requests by proxies.",
        projectStarCount: "5.1k",
        personalContributionDescription:
            "I added music control features and a way to edit the proxies.txt (proxy list) and uas.txt (user agent strings) directly from the frontend website.",
        actions: [
            {
                href: "https://github.com/sammwyy/MikuMikuBeam",
                iconifyIcon: "lucide:github",
                text: "MikuMikuBeam",
            },
            {
                href: "https://github.com/sammwyy/MikuMikuBeam/pull/14",
                iconifyIcon: "lucide:git-pull-request",
                text: "adding volume slider",
            },
            {
                href: "https://github.com/sammwyy/MikuMikuBeam/pull/15",
                iconifyIcon: "lucide:git-pull-request",
                text: "styling volume slider",
            },
            {
                href: "https://github.com/sammwyy/MikuMikuBeam/pull/19",
                iconifyIcon: "lucide:git-pull-request",
                text: "adding ability to edit",
            },
        ],
    },
    {
        projectName: "Dokploy",
        projectDescription:
            "Open Source Alternative to Vercel, Netlify and Heroku. It can deploy production-ready apps with local hardware and not having to use the cloud.",
        projectStarCount: "22.7k",
        personalContributionDescription:
            "Fixed an issue with the GitHub app creation where name conflicts would occur.",
        actions: [
            {
                href: "https://github.com/Dokploy/dokploy/issues/2265",
                iconifyIcon: "octicon:issue-opened-24",
                text: "issue created",
            },
            {
                href: "https://github.com/Dokploy/dokploy/pull/2266",
                iconifyIcon: "lucide:git-pull-request",
                text: "fix: github app creation name",
            },
        ],
    },
    {
        projectName: "Moe-Counter-Go",
        projectDescription:
            "There are multiple styles of the moe counter available in Golang! - 多种风格可选的萌萌计数器Golang版本",
        projectStarCount: "12",
        personalContributionDescription:
            "Solved issues with the Dockerbuild image since sqlite3 relies on native-C bindings but the build settings disallowed C-bindings.",
        actions: [
            {
                href: "https://github.com/skyle1995/Moe-Counter-Go/issues/4",
                iconifyIcon: "octicon:issue-opened-24",
                text: "notified repo owner of issue",
            },
            {
                href: "https://github.com/rainwashed/Moe-Counter-Go/commit/ce319cef62cca0ed4fe58db5e59d0c676523c148",
                iconifyIcon: "lucide:git-commit-horizontal",
                text: "required fix",
            },
        ],
    },
];

const Component = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10">
            <div className="h-20"></div>
            <div className="container w-full max-w-4xl px-4">
                <section className="mb-8">
                    <h1 className="mb-4 text-3xl font-semibold">My own projects:</h1>
                    <div className="grid gap-4 md:grid-cols-2">
                        {personalProjects.map((project, i) => (
                            <Card key={i} className="w-full">
                                <CardHeader>
                                    <CardTitle className="text-lg font-medium">{project.projectName}</CardTitle>
                                    <CardDescription className="space-x-1 space-y-1">
                                        {project.tags.map((tag, i2) => (
                                            <Badge key={i2} variant="secondary">{tag}</Badge>
                                        ))}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{project.projectDescription}</p>
                                </CardContent>
                                <CardFooter className="flex flex-col flex-wrap gap-2 sm:flex-row">
                                    {project.actions?.map((action, i3) => (
                                        <Link key={i3} href={action.href} target="_blank">
                                            <Button variant="outline" size="sm" className="whitespace-normal">
                                                <Icon icon={action.iconifyIcon} className="w-4 h-4 mr-2" />
                                                <span>{action.text}</span>
                                            </Button>
                                        </Link>
                                    ))}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>

                <section>
                    <h1 className="mb-4 text-3xl font-semibold">My open-source contributions:</h1>
                    <div className="grid gap-4 md:grid-cols-2">
                        {contributions.map((contribution, i) => (
                            <Card key={i} className="w-full">
                                <CardHeader>
                                    <CardTitle className="text-lg font-medium">{contribution.projectName} - <span className="text-sm text-yellow-500">{contribution.projectStarCount} ⭐</span></CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground">{contribution.projectDescription}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{contribution.personalContributionDescription}</p>
                                </CardContent>
                                <CardFooter className="flex flex-col flex-wrap gap-2 sm:flex-row">
                                    {contribution.actions?.map((action, i3) => (
                                        <Link key={i3} href={action.href} target="_blank">
                                            <Button variant="outline" size="sm" className="whitespace-normal">
                                                <Icon icon={action.iconifyIcon} className="w-4 h-4 mr-2" />
                                                <span>{action.text}</span>
                                            </Button>
                                        </Link>
                                    ))}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
            <div className="h-20"></div>
        </div>
    );
};

export default Component;
