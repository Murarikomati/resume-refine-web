import { useState } from "react";
import { Send, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/mdkgbwaj", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: new FormData(e.target as HTMLFormElement)
    });

    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container section-container">
        <h2 className="section-title text-center mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="section-subtitle">Contact Information</h3>
            <p className="text-foreground/80 mb-8">
              Feel free to reach out for job opportunities, collaborations, or just to say hello. I'm always open to discussing new projects and ideas.
            </p>

            <div className="space-y-6">
              <ContactItem icon={<Mail />} title="Email">
                <a href="mailto:murarikomati199ds@gmail.com" className="hover:text-primary">
                  murarikomati199ds@gmail.com
                </a>
              </ContactItem>

              <ContactItem icon={<Phone />} title="Phone">
                <a href="tel:+919579345054" className="hover:text-primary">
                  +91-9579345054
                </a>
              </ContactItem>

              <ContactItem icon={<MapPin />} title="Location">
                Solapur, Maharashtra, India
              </ContactItem>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Social Profiles:</h4>
              <div className="flex space-x-4">
                <SocialButton 
                  href="https://www.linkedin.com/in/komati-murari" 
                  icon={<Linkedin size={20} />}
                  label="LinkedIn"
                />
                <SocialButton 
                  href="https://github.com/Murarikomati" 
                  icon={<Github size={20} />}
                  label="GitHub"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="section-subtitle">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gap-2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactItem = ({ icon, title, children }: ContactItemProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <div className="text-foreground/80">{children}</div>
    </div>
  </div>
);

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialButton = ({ href, icon, label }: SocialButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
    aria-label={label}
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Contact;
