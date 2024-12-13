import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              RustAI Platform
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline-block">GitHub</span>
            </a>
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};