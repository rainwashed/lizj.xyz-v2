import { Button } from "@/components/ui/button";
import {
  SiGithub,
  SiGmail,
  SiXdadevelopers,
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

type PersonalSkill = {
  skillName: string;
  iconifyIconString: string;
  shortDescription?: string;
};
const personalSkills: PersonalSkill[] = [
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
    skillName: "Tailwind CSS",
    iconifyIconString: "skill-icons:tailwindcss-dark",
    shortDescription:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    skillName: "Bun.js",
    iconifyIconString: "skill-icons:bun-dark",
    shortDescription: "Bun is a fast all-in-one JavaScript runtime.",
  },
  {
    skillName: "Node.js",
    iconifyIconString: "skill-icons:nodejs-dark",
    shortDescription:
      "Node.js is an open-source, cross-platform JavaScript runtime environment.",
  },
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
    skillName: "Neovim",
    iconifyIconString: "skill-icons:neovim-dark",
    shortDescription:
      "Neovim is a free and open-source, refactored vim editor.",
  },
  {
    skillName: "Vite",
    iconifyIconString: "skill-icons:vite-dark",
    shortDescription:
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
  },
  {
    skillName: "Dart",
    iconifyIconString: "skill-icons:dart-dark",
    shortDescription:
      "Dart is a client-optimized programming language for fast apps on any platform.",
  },
  {
    skillName: "Flutter",
    iconifyIconString: "skill-icons:flutter-dark",
    shortDescription:
      "Flutter is an open source framework by Google for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
];

const IconLinkButton: React.FC<
  PropsWithChildren<{
    href: string;
    platform: string;
  }>
> = (props) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Link href={props.href} target="_blank" className="inline-block">
        <Button variant="outline" size="icon" className="cursor-pointer">
          {props.children}
        </Button>
      </Link>
    </HoverCardTrigger>
    <HoverCardContent className="px-2 py-1 text-xs w-fit">
      {props.platform}
    </HoverCardContent>
  </HoverCard>
);

const Component = () => (
  <>
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <span className="mb-5 rounded-full shadow-lg size-48">
        <Image
          src="https://github.com/rainwashed.png"
          alt="GitHub avatar"
          className="!relative rounded-full"
          fill
          priority
        />
      </span>
      <div className="flex flex-col justify-center p-4 space-y-2 border rounded-sm shadow-lg w-fit border-primary/10">
        <h1 className="text-3xl md:text-5xl font-(family-name:--font-noto-sans-sc) font-semibold text-center">
          你好. <span className="font-sans">I am </span>李.
        </h1>
        <span className="inline-flex items-center justify-center space-x-1">
          <Badge variant="outline">Developer</Badge>
          <Badge variant="outline">Creator</Badge>
          <Badge variant="outline">Learner</Badge>
        </span>
        <span className="inline-flex items-center justify-center w-full space-x-2 font-light">
          <IconLinkButton
            href="https://github.com/rainwashed"
            platform="GitHub"
          >
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
        </span>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl">Technologies I use:</h1>
      <div className="mt-4 border-foreground/20 rounded-sm p-4 border grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 w-[90%] md:w-fit mx-auto justify-center items-center">
        {personalSkills.map((skill, i) => (
          <Dialog key={i}>
            <DialogTrigger>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center justify-center transition-transform size-20 hover:scale-110">
                    <Icon
                      icon={skill.iconifyIconString}
                      className="w-full h-full"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="px-2 py-1 text-sm text-center w-fit">
                  {skill.skillName}
                </HoverCardContent>
              </HoverCard>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>{skill.skillName}</DialogTitle>
              <DialogDescription>
                {skill.shortDescription ?? "No description was written."}
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  </>
);

export default Component;
