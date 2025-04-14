
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative pt-16 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-60 left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          {/* Replace with your actual profile picture */}
          <div className="w-full h-full bg-muted flex items-center justify-center text-primary">
            <span className="text-3xl font-bold">MK</span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Murari Komati
        </h1>
        
        <div className="h-12 mb-6">
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium inline-flex items-center">
            <span className="typed-text relative after:content-['|'] after:ml-1 after:animate-pulse-slow">
              Data Engineer
            </span>
          </p>
        </div>
        
        <p className="text-lg max-w-2xl mx-auto mb-8 text-foreground/80">
          Specializing in building scalable data pipelines and architecting cloud-based solutions using 
          <span className="text-primary font-medium"> Azure, Databricks, and Python</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href="/resume.pdf" download>
              <Download size={18} />
              Download Resume
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="mx-auto w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
