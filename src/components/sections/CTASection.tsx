import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Transform Your Digital Presence?
          </h2> 
          <p className="text-lg text-primary-foreground/80">
            Let's discuss how we can help you achieve your business goals with our 
            comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-primary-foreground/30  hover:bg-primary-foreground/10"
            >
              <Link to="/portfolio">
                <MessageSquare className="mr-2 h-5 w-5" />
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
