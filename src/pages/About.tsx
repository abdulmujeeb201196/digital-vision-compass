import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Award,
  Heart,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the tangible results we deliver for our clients.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work alongside you as an extension of your team, not just a vendor.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends to bring cutting-edge solutions to every project.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're invested in your long-term growth.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "15+ years in software development and digital strategy.",
  },
  {
    name: "Sarah Martinez",
    role: "Head of Marketing",
    bio: "Former agency director with expertise in growth marketing.",
  },
  {
    name: "Michael Park",
    role: "Technical Director",
    bio: "Full-stack architect specializing in scalable applications.",
  },
  {
    name: "Emily Johnson",
    role: "Creative Director",
    bio: "Award-winning designer focused on user experience.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              We're Digital <span className="text-primary">Next Path</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A team of passionate marketers and developers united by a single mission: 
              helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Digital Next Path was born from a simple observation: businesses 
                  were struggling to find partners who understood both marketing 
                  AND technology.
                </p>
                <p>
                  Marketing agencies couldn't build custom software. Development 
                  shops didn't understand user acquisition. We saw an opportunity 
                  to bridge that gap.
                </p>
                <p>
                  Today, we're a full-service digital solutions partner that helps 
                  businesses grow through strategic marketing AND custom technology 
                  solutions — often at the same time.
                </p>
              </div>
              <Button asChild>
                <Link to="/process">
                  See How We Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-primary/10 text-center">
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="p-6 rounded-xl bg-card border text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 rounded-xl bg-card border text-center">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-6 rounded-xl bg-primary/10 text-center">
                  <div className="text-4xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented people behind Digital Next Path.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="h-20 w-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
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
              Ready to Work Together?
            </h2>
            <p className="text-primary-foreground/80">
              Let's discuss how we can help your business grow.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
