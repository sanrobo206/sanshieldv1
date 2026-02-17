import { Shield, Cpu, Eye, Usb, Bell, Globe, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Driven Management",
    description: "Tell the AI what the device is for, set broad categories for allowed and blocked content, and let it handle the rest intelligently.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "System-level monitoring that tracks everything — not just browser activity, but device usage, app launches, and more.",
  },
  {
    icon: Globe,
    title: "Smart Website Filtering",
    description: "Every website is reviewed in real time by AI. Harmful content is instantly blocked, and the blocklist grows automatically.",
  },
  {
    icon: Usb,
    title: "External Device Control",
    description: "When an external device is plugged in, the AI reviews it instantly and decides whether to grant or deny access.",
  },
  {
    icon: Bell,
    title: "Instant Alerts & Notifications",
    description: "Students are warned on-screen. Teachers are notified immediately. Parents receive email reports — everyone stays informed.",
  },
  {
    icon: Lock,
    title: "Bypass-Proof Security",
    description: "System-level protection that can't be circumvented. After two warnings, devices are locked for 24 hours until an admin unlocks them.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
            <Zap className="w-3.5 h-3.5" />
            Core Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protection that goes beyond the browser
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Unlike browser-based extensions, SanShield operates at the system level — monitoring everything students do on the device, not just what they search.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:glow-box"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
