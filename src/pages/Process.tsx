import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  Code2,
  Rocket,
  ArrowRight,
  Target,
  Share2,
} from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals, target audience, and technical requirements.",
    marketing: [
      "Audience research",
      "Competitor analysis",
      "Channel strategy",
    ],
    software: [
      "Requirements gathering",
      "Technical feasibility",
      "Architecture planning",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning & Proposal",
    description:
      "We create a detailed roadmap with clear milestones, timelines, and investment estimates.",
    marketing: [
      "Strategy document",
      "Content calendar",
      "KPI targets",
    ],
    software: [
      "Technical specifications",
      "System architecture",
      "Development timeline",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Execution & Development",
    description:
      "Our team brings your vision to life with regular updates and iterative improvements.",
    marketing: [
      "Content creation",
      "Campaign management",
      "SEO implementation",
    ],
    software: [
      "Agile development",
      "Quality testing",
      "Code reviews",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimization",
    description:
      "We ensure a smooth launch and continue optimizing for better results.",
    marketing: [
      "Campaign launch",
      "Performance monitoring",
      "Continuous optimization",
    ],
    software: [
      "Deployment",
      "User training",
      "Ongoing maintenance",
    ],
  },
];

export default function Process() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              Our Process
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              How We <span className="text-primary">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A proven process that delivers results for both marketing and software projects.
              We adapt our approach to fit your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <phase.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-semibold">
                        Phase {phase.number}
                      </span>
                      <h2 className="text-2xl font-bold">{phase.title}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg">{phase.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-card border">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Marketing</span>
                    </div>
                    <ul className="space-y-2">
                      {phase.marketing.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 rounded-xl bg-card border">
                    <div className="flex items-center gap-2 mb-4">
                      <Code2 className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Software</span>
                    </div>
                    <ul className="space-y-2">
                      {phase.software.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80">
              Let's begin with a discovery call to understand your needs and goals.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
