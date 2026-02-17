import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2 font-heading font-bold text-lg">
          <Shield className="h-5 w-5 text-primary" />
          SanShield
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#purpose" className="hover:text-foreground transition-colors">Purpose</a>
        </div>

        <Button variant="hero" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
