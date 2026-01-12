import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Search,
  Share2,
  ShoppingCart,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development & Design",
    description:
      "Beautiful, responsive websites optimized for performance and conversions.",
    features: [
      "Custom responsive design",
      "CMS integration",
      "Performance optimization",
      "Mobile-first approach",
    ],
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    description:
      "Drive organic traffic with strategic content and technical SEO optimization.",
    features: [
      "Keyword research & strategy",
      "On-page & technical SEO",
      "Content creation",
      "Link building",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Build community and engagement across all major social platforms.",
    features: [
      "Content calendar management",
      "Community engagement",
      "Paid social campaigns",
      "Analytics & reporting",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Complete online store setup with payment processing and inventory management.",
    features: [
      "Shopify / WooCommerce setup",
      "Payment gateway integration",
      "Product management",
      "Conversion optimization",
    ],
  },
];

export default function MarketingServices() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              <Share2 className="h-3 w-3 mr-1" />
              Digital Marketing Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Amplify Your <span className="text-primary">Digital Presence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From stunning websites to strategic SEO, we help businesses grow their 
              online presence and convert visitors into customers.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
              <Sparkles className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Need custom tools for your marketing?</h3>
                <p className="text-muted-foreground">
                  Explore our software development services for automation and analytics.
                </p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link to="/services/software">
                View Software Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
