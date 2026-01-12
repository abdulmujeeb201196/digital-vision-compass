import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Laptop,
  Smartphone,
  Link2,
  ArrowRight,
  Check,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Custom Web Applications",
    description:
      "Scalable web applications built with modern technologies like C#, ASP.NET, React, and Angular.",
    features: [
      "Full-stack development",
      "RESTful API design",
      "Cloud deployment",
      "Scalable architecture",
    ],
  },
  {
    icon: Laptop,
    title: "Desktop Applications",
    description:
      "Powerful desktop solutions for business automation and productivity.",
    features: [
      "Windows applications",
      "Cross-platform solutions",
      "Database integration",
      "Offline functionality",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android devices.",
    features: [
      "iOS & Android development",
      "React Native / Flutter",
      "App Store deployment",
      "Push notifications",
    ],
  },
  {
    icon: Link2,
    title: "System Integration",
    description:
      "Connect your existing tools and systems for seamless data flow.",
    features: [
      "API development",
      "Third-party integrations",
      "Data migration",
      "Workflow automation",
    ],
  },
];

const techStack = [
  "C#",
  "ASP.NET",
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  "SQL Server",
  "PostgreSQL",
  "Azure",
  "AWS",
];

export default function SoftwareServices() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              <Monitor className="h-3 w-3 mr-1" />
              Custom Software Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Build Your <span className="text-primary">Custom Solution</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From web applications to mobile apps and system integrations, we deliver 
              tailored software solutions that power your business.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">Technologies we use:</span>
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-card border">
            <div className="flex items-center gap-4">
              <Rocket className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Building for users?</h3>
                <p className="text-muted-foreground">
                  Pair your app with our launch marketing strategy for maximum impact.
                </p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link to="/services/marketing">
                View Marketing Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
