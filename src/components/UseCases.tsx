import { Heart, GraduationCap } from "lucide-react";

const UseCases = () => {
  return (
    <section id="purpose" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
              <Heart className="w-3.5 h-3.5" />
              AI for Good
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built to protect, <br />
              <span className="text-primary">not to restrict.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              SanShield isn't about taking Chromebooks away from students. It's about creating a safe environment where kids can explore, learn, and have fun — without compromising their security.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Traditional browser-based solutions only cover what happens inside the browser. SanShield provides system-level monitoring — tracking when the device powers on, what apps are used, and everything in between. It's security that grows smarter with every interaction.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Smarter Over Time</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every time a harmful website is detected, it's added to the blocklist automatically. The AI learns and adapts to new threats continuously.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Everyone Stays in the Loop</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When something goes wrong, the student, teacher, and parents are all notified via on-screen alerts and email. Transparency builds trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fair Enforcement</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Students receive two warnings before any device lock. Teachers and admins can unlock devices early, keeping the system fair and flexible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
