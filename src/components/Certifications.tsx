
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: "databricks-lakehouse",
      title: "Databricks Lakehouse Fundamentals",
      issuer: "Databricks",
      date: "2023",
      credentialUrl: "#",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "databricks-genai",
      title: "Databricks Generative AI Fundamentals",
      issuer: "Databricks",
      date: "2023", 
      credentialUrl: "#",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "python-data-science",
      title: "Python Basics for Data Science",
      issuer: "EDX Certification",
      date: "2022",
      credentialUrl: "#",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container section-container">
        <h2 className="section-title text-center mb-12">Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className={cn(
                "bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 fade-in",
              )}
              style={{ "--delay": index } as React.CSSProperties}
            >
              <div className="h-40 bg-muted relative flex items-center justify-center">
                {cert.imageUrl ? (
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Award size={60} className="text-primary/30" />
                )}
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <div className="text-muted-foreground text-sm mb-4">
                  <div className="flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </span>
                  </div>
                </div>
                
                {cert.credentialUrl && (
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        <span>View Credential</span>
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
