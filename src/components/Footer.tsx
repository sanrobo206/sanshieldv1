import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to protect your school devices?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Give students the freedom to explore — safely. Get started with SanShield today.
          </p>
          <Button variant="hero" size="lg" className="text-base px-10">
            Get Started
          </Button>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground font-heading font-bold text-lg">
            <Shield className="h-5 w-5 text-primary" />
            SanShield
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} SanShield. AI-driven device management for schools.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
