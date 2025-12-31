import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import StarField from '@/components/StarField';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />

      {/* Dawn gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(330 80% 65% / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, hsl(15 90% 65% / 0.1) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
            <span className="font-display font-bold text-foreground">Digital Next Path</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Vision Generator
            </Button>
          </Link>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center"
              >
                <MessageSquare className="w-8 h-8 text-primary" />
              </motion.div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient">
                Let's Talk About Your Path
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Ready to make your 2026 digital vision a reality? We're here to help you navigate the journey.
              </p>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  How can we help?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your digital goals and challenges..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full py-6 font-display font-semibold"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.form>

            {/* Alternative contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground">
                Prefer email? Reach us directly at{' '}
                <a 
                  href="mailto:hello@digitalnextpath.com" 
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                  hello@digitalnextpath.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Digital Next Path. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;