import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Flame, Monitor, Wrench, Link2 } from "lucide-react";

type ProjectCategory = "all" | "marketing" | "software" | "integrated";

const projects = [
  {
    title: "E-commerce Platform Redesign",
    client: "Fashion Boutique Co.",
    category: "marketing" as const,
    description:
      "Complete website redesign with SEO optimization that increased organic traffic by 150%.",
    results: ["150% traffic increase", "45% conversion boost", "Page 1 rankings"],
    tags: ["Web Design", "SEO", "E-commerce"],
  },
  {
    title: "Custom Inventory Management System",
    client: "Retail Distribution Inc.",
    category: "software" as const,
    description:
      "Built a custom .NET inventory system integrated with their existing Shopify store.",
    results: ["60% error reduction", "Real-time tracking", "Multi-warehouse support"],
    tags: ["C#", ".NET", "API Integration"],
  },
  {
    title: "CRM + Marketing Automation",
    client: "SaaS Startup",
    category: "integrated" as const,
    description:
      "Custom CRM with email automation, lead scoring, and social media integration.",
    results: ["300% lead conversion", "Automated workflows", "Real-time analytics"],
    tags: ["CRM", "Email Automation", "Social Media"],
  },
  {
    title: "Social Media Campaign",
    client: "Local Restaurant Chain",
    category: "marketing" as const,
    description:
      "Full social media management with content creation and paid advertising campaigns.",
    results: ["500% engagement increase", "25K new followers", "ROI of 400%"],
    tags: ["Social Media", "Content", "Paid Ads"],
  },
  {
    title: "Mobile App Development",
    client: "Fitness Studio",
    category: "software" as const,
    description:
      "Cross-platform mobile app for class booking, payments, and member engagement.",
    results: ["10K+ downloads", "4.8 star rating", "70% booking increase"],
    tags: ["React Native", "Mobile", "Payments"],
  },
  {
    title: "Analytics Dashboard + SEO",
    client: "B2B Services Company",
    category: "integrated" as const,
    description:
      "Custom analytics dashboard combined with comprehensive SEO strategy.",
    results: ["Real-time insights", "200% traffic growth", "Lead tracking"],
    tags: ["Analytics", "SEO", "Dashboard"],
  },
];

const categoryIcons = {
  marketing: Flame,
  software: Wrench,
  integrated: Link2,
};

const categoryLabels = {
  all: "All Projects",
  marketing: "Digital Marketing",
  software: "Custom Software",
  integrated: "Integrated Solutions",
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-primary">Case Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects across marketing, 
              software development, and integrated solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b sticky top-16 bg-background z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="gap-2"
              >
                {category !== "all" && (() => {
                  const Icon = categoryIcons[category];
                  return <Icon className="h-4 w-4" />;
                })()}
                {categoryLabels[category]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const CategoryIcon = categoryIcons[project.category];
              return (
                <Card key={project.title} className="border-2 hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="gap-1">
                        <CategoryIcon className="h-3 w-3" />
                        {categoryLabels[project.category]}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{project.client}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="space-y-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {result}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Want Results Like These?
            </h2>
            <p className="text-primary-foreground/80">
              Let's discuss how we can help you achieve similar success.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
