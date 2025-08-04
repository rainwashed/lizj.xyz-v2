import { Button } from "@/components/ui/button";
import { SiGithub, SiGmail, SiXdadevelopers, SiYoutube } from "@icons-pack/react-simple-icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Link from "next/link";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";

const IconLinkButton: React.FC<PropsWithChildren<{
  href: string;
  platform: string;
}>> = (props) => <HoverCard>
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

const Component = () => <>
  <div className="flex flex-col items-center justify-center w-screen h-screen">
    <span className="mb-5 rounded-full shadow-lg size-48">
      <Image src="https://github.com/rainwashed.png" alt="GitHub avatar" className="!relative rounded-full" fill priority />
    </span>
    <div className="flex flex-col justify-center p-4 space-y-2 border rounded-sm shadow-lg w-fit border-primary/10">
      <h1 className="text-3xl md:text-5xl font-(family-name:--font-noto-sans-sc) font-semibold text-center">你好. <span className="font-sans">I am </span>李.</h1>
      <span className="inline-flex items-center justify-center space-x-1">
        <Badge variant="outline">
          Developer
        </Badge>
        <Badge variant="outline">
          Creator
        </Badge>
        <Badge variant="outline">
          Learner
        </Badge>
      </span>
      <span className="inline-flex items-center justify-center w-full space-x-2 font-light">
        <IconLinkButton href="https://github.com/rainwashed" platform="GitHub">
          <SiGithub />
        </IconLinkButton>
        <IconLinkButton href="https://youtube.com/@rainwashedz" platform="YouTube">
          <SiYoutube />
        </IconLinkButton>
        <IconLinkButton href="mailto:li@lizj.xyz" platform="Email">
          <SiGmail />
        </IconLinkButton>
      </span>
    </div>
  </div>
</>

export default Component;