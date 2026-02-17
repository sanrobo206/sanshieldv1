import { Settings, Brain, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Enroll & Configure",
    description: "Chromebooks are enrolled through the admin console. Administrators define broad categories of allowed and blocked content using natural language.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Takes Over",
    description: "The AI continuously monitors the device at the system level — reviewing websites, apps, and external devices in real time. The blocklist grows smarter over time.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Stay Protected & Informed",
    description: "Students receive on-screen warnings. Teachers get instant notifications. Parents receive email reports. After two bypass attempts, the device locks for 24 hours.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps to comprehensive device protection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div key={item.step} className="relative text-center">
              <div className="text-6xl font-bold text-primary/10 mb-4 font-heading">
                {item.step}
              </div>
              <div className="inline-flex rounded-full bg-primary/10 p-4 text-primary mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
