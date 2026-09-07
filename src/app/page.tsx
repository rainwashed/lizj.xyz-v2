import { Button } from "@/components/ui/button";
import {
  SiGithub,
  SiGmail,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";

type PersonalSkill = {
  skillName: string;
  iconifyIconString: string;
  shortDescription?: string;
};

type SkillCategory = {
  label: string;
  skills: PersonalSkill[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      {
        skillName: "TypeScript",
        iconifyIconString: "skill-icons:typescript",
        shortDescription:
          "TypeScript is a strongly typed programming language that builds on JavaScript.",
      },
      {
        skillName: "JavaScript",
        iconifyIconString: "skill-icons:javascript",
        shortDescription:
          "JavaScript is a high-level, interpreted programming language.",
      },
      {
        skillName: "Python",
        iconifyIconString: "skill-icons:python-dark",
        shortDescription:
          "Python is a high-level, general-purpose programming language.",
      },
      {
        skillName: "Golang",
        iconifyIconString: "skill-icons:golang",
        shortDescription:
          "Go is a statically typed, compiled programming language designed at Google.",
      },
      {
        skillName: "Dart",
        iconifyIconString: "skill-icons:dart-dark",
        shortDescription:
          "Dart is a client-optimized programming language for fast apps on any platform.",
      },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      {
        skillName: "React",
        iconifyIconString: "skill-icons:react-dark",
        shortDescription:
          "React is a JavaScript library for building user interfaces.",
      },
      {
        skillName: "Vue.js",
        iconifyIconString: "skill-icons:vuejs-dark",
        shortDescription:
          "Vue.js is a progressive JavaScript framework for building user interfaces.",
      },
      {
        skillName: "Nuxt.js",
        iconifyIconString: "skill-icons:nuxtjs-dark",
        shortDescription:
          "Nuxt.js is a meta-framework built on top of Vue.js combining server and client functionality into a singular codebase.",
      },
      {
        skillName: "ElysiaJS",
        iconifyIconString: "skill-icons:elysia-dark",
        shortDescription: "ElysiaJS is a fast and friendly web framework for Bun.",
      },
      {
        skillName: "Flutter",
        iconifyIconString: "skill-icons:flutter-dark",
        shortDescription:
          "Flutter is an open source framework by Google for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
      },
      {
        skillName: "Tailwind CSS",
        iconifyIconString: "skill-icons:tailwindcss-dark",
        shortDescription:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
      },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      {
        skillName: "Git",
        iconifyIconString: "skill-icons:git",
        shortDescription:
          "Git is a version control system used to collaborate and revise existing code in a systematic manner.",
      },
      {
        skillName: "Linux",
        iconifyIconString: "skill-icons:linux-dark",
        shortDescription:
          "Linux is an open-source collection of operating systems that is most prominently used in server environments that run the internet and computing systems.",
      },
      {
        skillName: "Node.js",
        iconifyIconString: "skill-icons:nodejs-dark",
        shortDescription:
          "Node.js is an open-source, cross-platform JavaScript runtime environment.",
      },
      {
        skillName: "Bun.js",
        iconifyIconString: "skill-icons:bun-dark",
        shortDescription: "Bun is a fast all-in-one JavaScript runtime.",
      },
      {
        skillName: "Vite",
        iconifyIconString: "skill-icons:vite-dark",
        shortDescription:
          "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
      },
      {
        skillName: "Neovim",
        iconifyIconString: "skill-icons:neovim-dark",
        shortDescription:
          "Neovim is a free and open-source, refactored vim editor.",
      },
    ],
  },
];

const IconLinkButton: React.FC<
  PropsWithChildren<{
    href: string;
    platform: string;
  }>
> = ({ href, platform, children }) => (
  <HoverCard openDelay={120} closeDelay={100}>
    <HoverCardTrigger asChild>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={platform}
        className="inline-block"
      >
        <Button
          variant="outline"
          size="icon"
          className="group/icon size-11 cursor-pointer rounded-full border-foreground/15 bg-background/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-background hover:shadow-md"
        >
          {children}
        </Button>
      </Link>
    </HoverCardTrigger>
    <HoverCardContent
      sideOffset={10}
      className="w-fit rounded-full border-foreground/10 px-3 py-1 text-xs font-medium shadow-md backdrop-blur-xl"
    >
      {platform}
    </HoverCardContent>
  </HoverCard>
);

const Component = () => (
  <>
    {/* Hero */}
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 py-28 sm:px-6">
      {/* Backdrop */}
      <div
        aria-hidden
        className="bg-dot-grid mask-fade-radial absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="bg-glow-top absolute inset-x-0 top-0 -z-10 h-[32rem]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/5 blur-3xl"
      />

      {/* Avatar */}
      <div className="relative mb-10 size-36 md:mb-12 md:size-44">
        <div
          aria-hidden
          className="absolute -inset-5 -z-10 rounded-full bg-foreground/5 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -inset-2.5 animate-spin rounded-full border border-dashed border-foreground/20 [animation-duration:24s]"
        />
        <Image
          src="https://github.com/rainwashed.png"
          alt="GitHub avatar"
          className="rounded-full object-cover ring-1 ring-foreground/15 transition-transform duration-500 hover:scale-[1.03]"
          fill
          priority
        />
      </div>

      <h1 className="text-balance text-center text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.12] tracking-tight">
        你好.{" "}
        <span className="font-light text-foreground">I am </span>
        <span className="font-(family-name:--font-noto-sans-sc) inline-block">
          李.
        </span>
      </h1>

      {/* Roles */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        {["Developer", "Creator", "Learner"].map((role) => (
          <Badge
            key={role}
            variant="outline"
            className="rounded-full border-foreground/15 bg-background/60 px-3.5 py-1 text-xs font-medium tracking-wide backdrop-blur-sm"
          >
            {role}
          </Badge>
        ))}
      </div>

      {/* Socials */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <IconLinkButton href="https://github.com/rainwashed" platform="GitHub">
          <SiGithub />
        </IconLinkButton>
        <IconLinkButton
          href="https://youtube.com/@rainwashedz"
          platform="YouTube"
        >
          <SiYoutube />
        </IconLinkButton>
        <IconLinkButton href="mailto:li@lizj.xyz" platform="Email">
          <SiGmail />
        </IconLinkButton>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-foreground/35 md:block"
      >
        <ChevronDown className="size-5" />
      </div>
    </section>

    {/* Skills */}
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
      <div
        aria-hidden
        className="bg-dot-grid mask-fade-radial absolute inset-0 -z-10 opacity-80"
      />

      <div className="w-full max-w-4xl">
        <div className="mb-10 flex items-center justify-center gap-4 md:mb-14">
          <span aria-hidden className="h-px flex-1 bg-foreground/10" />
          <h2 className="text-center text-2xl font-semibold tracking-tight whitespace-nowrap sm:text-3xl">
            Technologies I use:
          </h2>
          <span aria-hidden className="h-px flex-1 bg-foreground/10" />
        </div>

        <div className="space-y-12 md:space-y-14">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <div className="mb-5 flex items-center gap-4">
                <h3 className="text-xs font-semibold tracking-[0.22em] uppercase whitespace-nowrap text-foreground/50">
                  {category.label}
                </h3>
                <span aria-hidden className="h-px flex-1 bg-foreground/10" />
              </div>
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <Dialog key={skill.skillName}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="group flex min-h-24 w-24 cursor-pointer flex-col items-center justify-center gap-2.5 rounded-xl border border-foreground/10 bg-background/70 px-2 py-4 backdrop-blur-sm transition-all duration-300 outline-none hover:-translate-y-1 hover:border-foreground/40 hover:bg-background hover:shadow-xl hover:shadow-foreground/5 focus-visible:ring-2 focus-visible:ring-ring/40 sm:min-h-28 sm:w-28 md:w-32"
                      >
                        <Icon
                          icon={skill.iconifyIconString}
                          className="size-7 transition-transform duration-300 group-hover:scale-110 sm:size-9"
                        />
                        <span className="text-center text-[11px] leading-tight font-medium text-foreground/75 sm:text-xs">
                          {skill.skillName}
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85svh] overflow-y-auto border-foreground/10 shadow-2xl">
                      <DialogHeader>
                        <DialogTitle>{skill.skillName}</DialogTitle>
                        <DialogDescription className="leading-relaxed">
                          {skill.shortDescription ?? "No description was written."}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Component;
