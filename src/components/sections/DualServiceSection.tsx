import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Search,
  Share2,
  ShoppingCart,
  Monitor,
  Laptop,
  Smartphone,
  Link2,
  ArrowRight,
} from "lucide-react";

const marketingServices = [
  { icon: Globe, title: "Web Development", description: "Responsive, optimized sites" },
  { icon: Search, title: "SEO & Content", description: "Drive organic growth" },
  { icon: Share2, title: "Social Media", description: "Build community & engagement" },
  { icon: ShoppingCart, title: "E-commerce", description: "Convert visitors to customers" },
];

const softwareServices = [
  { icon: Monitor, title: "Custom Web Apps", description: "C#, ASP.NET, React, Angular" },
  { icon: Laptop, title: "Desktop Solutions", description: "Business automation tools" },
  { icon: Smartphone, title: "Mobile Applications", description: "iOS & Android" },
  { icon: Link2, title: "System Integration", description: "Connect your tools" },
];

export function DualServiceSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Powerful Service Lines</h2>
          <p className="text-lg text-muted-foreground">
            Whether you need to amplify your digital presence or build custom technology solutions, 
            we have the expertise to deliver.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Digital Marketing */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Digital Marketing</CardTitle>
                  <CardDescription>Amplify Your Digital Presence</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {marketingServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-3 p-3 rounded-lg bg-background">
                    <service.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/services/marketing">
                  Explore Marketing Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Software Development */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Software Development</CardTitle>
                  <CardDescription>Build Your Custom Solution</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {softwareServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-3 p-3 rounded-lg bg-background">
                    <service.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/services/software">
                  Explore Software Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
