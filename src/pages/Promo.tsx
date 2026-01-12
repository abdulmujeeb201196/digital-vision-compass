import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Search, Users, TrendingDown, Cog, HelpCircle, Puzzle, Smartphone, Rocket, Target, Zap, CheckCircle, Gift, Percent, Mail, Phone, MapPin, ExternalLink, Monitor, ShoppingCart, BarChart3, MessageSquare, MailOpen, AppWindow, Gamepad2, Link2, FileText, Code, Headphones, Settings, Download } from "lucide-react";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
const Promo = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleDownloadPDF = () => {
    if (contentRef.current) {
      const opt = {
        margin: 0,
        filename: 'Digital_Next_Path_Services.pdf',
        image: {
          type: 'jpeg' as const,
          quality: 0.98
        },
        html2canvas: {
          scale: 2,
          useCORS: true
        },
        jsPDF: {
          unit: 'in' as const,
          format: 'a4',
          orientation: 'portrait' as const
        }
      };
      html2pdf().set(opt).from(contentRef.current).save();
    }
  };
  return <div className="min-h-screen bg-background">
      {/* PDF Download Button - Fixed */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button onClick={handleDownloadPDF} size="lg" className="shadow-lg">
          <Download className="h-5 w-5 mr-2" />
          Download PDF
        </Button>
      </div>

      <div ref={contentRef}>
      {/* Hero Section */}
      <section className="relative px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-[40px] pt-[40px] pb-px">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            DIGITAL NEXT PATH
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-8">Let's Get Dgital, Let's Grow Together</p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-[24px] bg-[#a1a1a1]/[0.31] px-[16px]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Is Your Business Facing These Challenges?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Digital Marketing Challenges */}
            <Card className="border-primary/20 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Digital Marketing Challenges
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Your website is outdated and doesn't convert.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">You're invisible on Google.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Your social media is quiet and not driving sales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingDown className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">You're losing customers to competitors who look more professional.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Custom Software Challenges */}
            <Card className="border-primary/20 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Cog className="h-6 w-6" />
                  Custom Software Challenges
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">You're stuck with manual processes or generic tools.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">You need a custom system but don't know where to start.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Puzzle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Your workflows are unique – off-the-shelf software doesn't fit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">You want to build an app but lack technical expertise.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      

      {/* Services Section */}
      <section className="py-[24px] bg-[#a1a1a1]/30 px-[16px]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Digital Marketing Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Business Website Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                    <span className="text-foreground">E-commerce & Shopify Setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">SEO & Local Ranking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Social Media Management & Marketing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MailOpen className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Email Automation & Lead Nurturing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Software Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <AppWindow className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Web Applications (CRM, ERP, SaaS)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Mobile Apps (Cross-Platform)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Desktop Solutions (Windows/macOS)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Gamepad2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Game Development with Unity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Link2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">System Integration & APIs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="px-4 py-[24px]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Deliverables
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Digital Marketing Deliverables</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Comprehensive Marketing Strategy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Optimized Website & Content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Engaging Social Media Presence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Targeted Ad Campaigns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Email automation setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Software Development Deliverables</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Fully Functional, Scalable Application</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Clean, Documented Code </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Training & Technical Documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Integration with existing tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Post-launch Support & Maintenance </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Section */}
      <section className="px-4 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 py-[24px]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">📢 LIMITED-TIME LAUNCH OFFER</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-card border-2 border-primary">
              <CardContent className="p-8 text-center">
                <Percent className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Digital Marketing Package</h3>
                <p className="text-3xl font-bold text-primary">25% OFF</p>
                <p className="text-muted-foreground mt-2">3-month strategy</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardContent className="p-8 text-center">
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Software Project</h3>
                <p className="text-2xl font-bold text-primary">Free Scoping</p>
                <p className="text-xl font-bold text-primary">+ 15% OFF Development</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto bg-card border-primary/30">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <span className="text-2xl">🎁</span>
                <h3 className="text-xl font-bold text-foreground mt-2">ALL NEW CLIENTS ALSO RECEIVE:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Free Digital Audit</span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Free 30-Min Strategy Session</span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Free Prototype/Mockup (Software Projects)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Start Your Growth Journey Section */}
      <section className="px-4 py-[24px]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Start Your Growth Journey
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-8">Your business is unique. 
Your solution should be too. 
We don't believe in one-size-fits-all. 
Once you share your requirements, we'll create a custom-tailored plan designed specifically for your goals, challenges, and vision.</p>

          <Card className="bg-muted/30 border-primary/20 max-w-md mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                TELL US 4 THINGS TO BEGIN:
              </h3>
              <ol className="space-y-4 w-fit mx-auto">
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">1</span>
                  <span className="text-foreground text-lg whitespace-nowrap">Business Name & Category</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">2</span>
                  <span className="text-foreground text-lg whitespace-nowrap">Services You Require</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">3</span>
                  <span className="text-foreground text-lg whitespace-nowrap">Website URL/Social Media Links</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">4</span>
                  <span className="text-foreground text-lg whitespace-nowrap">Goal/Target to Achieve</span>
                </li>
              </ol>
              <p className="text-center text-muted-foreground mt-6">
                We'll take it from there and build your personalized roadmap to growth.
              </p>
              <div className="text-center mt-8">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">Get Started Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="px-4 py-[24px] bg-[#a1a1a1]/[0.32]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Digital Next Path offers tailored digital marketing and custom software solutions designed 
            to address your unique business challenges and drive growth. We combine expertise in both 
            domains to deliver bespoke strategies, transparent processes, and ROI-focused execution. 
            Get in touch to start your personalized growth journey.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 text-background bg-primary">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Side - Phone and Location */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+923390003467" className="hover:opacity-80 transition-opacity">
                  +92-339-0003467
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Islamabad</span>
              </div>
            </div>

            {/* Right Side - Email and Website */}
            <div className="flex flex-col gap-4 md:text-right">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <Mail className="h-5 w-5" />
                <a href="mailto:connect@digitalnextpath.com" className="hover:opacity-80 transition-opacity">
                  connect@digitalnextpath.com
                </a>
              </div>
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <ExternalLink className="h-5 w-5" />
                <a href="https://www.digitalnextpath.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  www.digitalnextpath.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>;
};
export default Promo;