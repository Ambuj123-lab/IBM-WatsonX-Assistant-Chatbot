import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cpu, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter text-primary hover:text-primary/80 transition-colors">
            <Cpu className="h-6 w-6" />
            <span>WatsonX<span className="text-foreground">.AI</span></span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Capabilities</a>
          <a href="https://ambuj-ai-profile.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Live Demo</a>
          <a href="#about" className="hover:text-primary transition-colors">Creator</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Ambuj123-lab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/ambuj-tripathi-042b4a118/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
