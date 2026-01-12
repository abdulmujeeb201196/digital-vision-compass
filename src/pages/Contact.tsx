import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Globe, Monitor, Layers } from "lucide-react";

const marketingServices = [
  "Web Development",
  "SEO",
  "Social Media",
  "E-commerce",
];

const softwareServices = [
  "Web Applications",
  "Desktop Apps",
  "Mobile Apps",
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    marketing: false,
    software: false,
    integrated: false,
    selectedMarketing: [] as string[],
    selectedSoftware: [] as string[],
    timeline: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      marketing: false,
      software: false,
      integrated: false,
      selectedMarketing: [],
      selectedSoftware: [],
      timeline: "",
      budget: "",
      message: "",
    });
  };

  const toggleArrayItem = (
    arr: string[],
    item: string,
    setter: (items: string[]) => void
  ) => {
    if (arr.includes(item)) {
      setter(arr.filter((i) => i !== item));
    } else {
      setter([...arr, item]);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Let's Start Your <span className="text-primary">Project</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your needs and we'll get back to you within 24 hours 
              with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have a question or ready to start? Reach out through any channel 
                  that works best for you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hello@digitalnextpath.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">123 Tech Street, Innovation City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-2">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll prepare a customized proposal for your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-4">
                    <Label>What services are you interested in? *</Label>
                    <div className="space-y-4">
                      {/* Marketing */}
                      <div className="p-4 rounded-lg border bg-background space-y-3">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="marketing"
                            checked={formData.marketing}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                marketing: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="marketing" className="flex items-center gap-2 cursor-pointer">
                            <Globe className="h-4 w-4 text-primary" />
                            Digital Marketing Services
                          </Label>
                        </div>
                        {formData.marketing && (
                          <div className="flex flex-wrap gap-2 pl-6">
                            {marketingServices.map((service) => (
                              <Badge
                                key={service}
                                variant={
                                  formData.selectedMarketing.includes(service)
                                    ? "default"
                                    : "outline"
                                }
                                className="cursor-pointer"
                                onClick={() =>
                                  toggleArrayItem(
                                    formData.selectedMarketing,
                                    service,
                                    (items) =>
                                      setFormData({
                                        ...formData,
                                        selectedMarketing: items,
                                      })
                                  )
                                }
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Software */}
                      <div className="p-4 rounded-lg border bg-background space-y-3">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="software"
                            checked={formData.software}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                software: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="software" className="flex items-center gap-2 cursor-pointer">
                            <Monitor className="h-4 w-4 text-primary" />
                            Custom Software Development
                          </Label>
                        </div>
                        {formData.software && (
                          <div className="flex flex-wrap gap-2 pl-6">
                            {softwareServices.map((service) => (
                              <Badge
                                key={service}
                                variant={
                                  formData.selectedSoftware.includes(service)
                                    ? "default"
                                    : "outline"
                                }
                                className="cursor-pointer"
                                onClick={() =>
                                  toggleArrayItem(
                                    formData.selectedSoftware,
                                    service,
                                    (items) =>
                                      setFormData({
                                        ...formData,
                                        selectedSoftware: items,
                                      })
                                  )
                                }
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Integrated */}
                      <div className="p-4 rounded-lg border bg-background">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="integrated"
                            checked={formData.integrated}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                integrated: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="integrated" className="flex items-center gap-2 cursor-pointer">
                            <Layers className="h-4 w-4 text-primary" />
                            Both / Integrated Solution
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          setFormData({ ...formData, timeline: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-4 weeks)</SelectItem>
                          <SelectItem value="near">Near Future (1-3 months)</SelectItem>
                          <SelectItem value="planning">Planning Stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Approximate Budget</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-20k">$5,000 - $20,000</SelectItem>
                          <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                          <SelectItem value="unsure">Not sure / Need consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
