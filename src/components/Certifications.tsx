
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
      credentialUrl: "https://credentials.databricks.com/808d4466-355a-404a-bb4c-32ff8f2f0ff0#acc.oLxS2MD4",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkAJOFoKh-v9Nr5v8r2tCDra8gDz29YyNtA&s"
    },
    {
      id: "databricks-genai",
      title: "Databricks Generative AI Fundamentals",
      issuer: "Databricks",
      date: "2023", 
      credentialUrl: "#",
      imageUrl: "https://substack-post-media.s3.amazonaws.com/public/images/02bead78-fcc3-46c8-9fc1-eb17533093ff_520x335.png"
    },
    {
      id: "python-data-science",
      title: "Python Basics for Data Science",
      issuer: "EDX Certification",
      date: "2022",
      credentialUrl: "https://drive.google.com/file/d/1McrASNUuaU0ZtvDK5t0Kh2MdX-JNfcG6/view",
      imageUrl: "data:image/png;base64,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"
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
                    className="h-full object-cover"
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
