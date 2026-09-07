import Link from "next/link";

const Component = () => (
    <footer className="relative z-10 flex justify-center w-full border-t border-foreground/10 bg-background/80 px-4 py-6 h-fit">
        <span className="text-xs text-center text-foreground/45">
            © 2025
            <Link
                href="https://rainworks.club"
                target="_blank"
                className="ml-1 underline underline-offset-4 decoration-foreground/30 transition-colors hover:text-foreground hover:decoration-foreground"
            >
                rainworks.club
            </Link>
            . All rights reserved.
        </span>
    </footer>
);

export default Component;
