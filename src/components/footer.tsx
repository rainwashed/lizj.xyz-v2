import Link from "next/link";

const Component = () => (
    <footer className="flex justify-center w-screen pt-2 pb-1 bg-background/80 h-fit">
        <span className="text-xs text-center text-foreground/50">
            © 2025
            <Link
                href="https://rainworks.club"
                target="_blank"
                className="ml-1 underline"
            >
                rainworks.club
            </Link>
            . All rights reserved.
        </span>
    </footer>
);

export default Component;
