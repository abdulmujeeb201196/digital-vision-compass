import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Bot, Target, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Software Development",
    href: "/services/software",
    description: "Web Apps, Desktop, Mobile & System Integration",
    icon: Bot,
  },
  {
    title: "Digital Marketing Services",
    href: "/services/marketing",
    description: "Web Design, SEO, Social Media & E-commerce",
    icon: Target,
  },
  {
    title: "Combined Solutions",
    href: "/services/integrated",
    description: "Marketing Software Tools, CRM & Analytics",
    icon: Layers,
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Our Process", href: "/process" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">D</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Digital Next Path</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link
            to="/"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/" ? "text-primary" : "text-foreground/70"
            )}
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-accent"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <service.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">{service.title}</div>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="flex items-center gap-3 py-2 text-sm hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <service.icon className="h-4 w-4 text-primary" />
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="px-4 pt-4">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
