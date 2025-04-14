
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-lg font-bold text-primary">Murari Komati</div>
            <div className="text-sm text-muted-foreground">
              Data Engineer • Cloud Specialist
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className={cn(
                "mb-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors",
                "flex items-center justify-center"
              )}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-primary" />
            </button>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} • All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
