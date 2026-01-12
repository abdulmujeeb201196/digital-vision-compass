import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Zap, BarChart3, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Custom CRM with Marketing Automation",
    description: "Streamline your sales pipeline with integrated email campaigns and lead scoring.",
  },
  {
    icon: BarChart3,
    title: "E-commerce with Analytics Dashboard",
    description: "Real-time insights into your store performance with custom reporting tools.",
  },
  {
    icon: Layers,
    title: "Mobile App with Social Integration",
    description: "Connect your app with social media for seamless sharing and engagement.",
  },
];

export function IntegratedSolutionsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="text-sm">
              Our Unique Advantage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Both? Get{" "}
              <span className="text-primary">Integrated Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Unlike pure marketing agencies or standalone development shops, we understand 
              how technology and marketing work together. We can build your custom software 
              AND ensure it gets found by the right audience.
            </p>
            <Button asChild size="lg">
              <Link to="/services/integrated">
                Explore Integrated Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
