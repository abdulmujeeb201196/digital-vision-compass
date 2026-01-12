import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Zap,
  BarChart3,
  Users,
  Mail,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Custom CRM with Marketing Automation",
    description:
      "Streamline your sales pipeline with integrated email campaigns, lead scoring, and automated follow-ups.",
    tags: ["CRM", "Email Automation", "Lead Management"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard Development",
    description:
      "Real-time insights into your marketing and business performance with custom reporting tools.",
    tags: ["Data Visualization", "Real-time Analytics", "Custom Reports"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Platform with Custom Backend",
    description:
      "Full-featured online stores with custom inventory management and fulfillment systems.",
    tags: ["E-commerce", "Inventory", "Order Management"],
  },
  {
    icon: Users,
    title: "Mobile App with Social Integration",
    description:
      "Connect your app with social media for seamless sharing, engagement, and viral growth.",
    tags: ["Mobile App", "Social Media", "Sharing Features"],
  },
  {
    icon: Mail,
    title: "Marketing Software Tools",
    description:
      "Custom tools for content management, scheduling, and campaign optimization.",
    tags: ["Content Management", "Scheduling", "Campaign Tools"],
  },
  {
    icon: Layers,
    title: "System Integration Hub",
    description:
      "Connect all your marketing and business tools into one unified platform.",
    tags: ["API Integration", "Workflow", "Data Sync"],
  },
];

export default function IntegratedServices() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              <Layers className="h-3 w-3 mr-1" />
              Combined Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Marketing-Driven <span className="text-primary">Technology Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The perfect blend of marketing expertise and technical innovation. 
              We build solutions where technology and marketing work together seamlessly.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss Your Vision
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Unique Value */}
      <section className="py-16 border-b">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Our Unique Advantage</h2>
            </div>
            <p className="text-muted-foreground">
              Unlike pure marketing agencies or standalone development shops, we understand 
              how technology and marketing work together. We can build your custom software 
              AND ensure it gets found by the right audience.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrated Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Solutions designed to combine the power of marketing and technology for maximum impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Card key={solution.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Ready to Integrate Marketing & Technology?
            </h2>
            <p className="text-primary-foreground/80">
              Let's discuss how we can create a comprehensive solution tailored to your needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start the Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
