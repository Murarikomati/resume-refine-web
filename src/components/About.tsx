
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="section-title" style={{ "--delay": "1" } as React.CSSProperties}>
              About Me
            </h2>
            
            <div className="space-y-4 text-lg">
              <p className={cn("slide-in")} style={{ "--delay": "2" } as React.CSSProperties}>
                I'm a dedicated <span className="text-primary font-medium">Data Engineer</span> with expertise in building end-to-end data pipelines, implementing cloud-based data solutions, and architecting data warehouses.
              </p>
              
              <p className={cn("slide-in")} style={{ "--delay": "3" } as React.CSSProperties}>
                My experience spans across real-time data processing, ETL pipeline development, and implementing Medallion Architecture in Azure environments.
              </p>
              
              <p className={cn("slide-in")} style={{ "--delay": "4" } as React.CSSProperties}>
                With a strong foundation in <span className="text-primary font-medium">Python, SQL, and Apache Spark</span>, I specialize in transforming complex data requirements into scalable solutions that drive business value.
              </p>
              
              <p className={cn("slide-in")} style={{ "--delay": "5" } as React.CSSProperties}>
                I'm passionate about leveraging data to drive insights and have successfully implemented solutions that have improved data quality, reduced processing time, and enhanced business reporting capabilities.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl bg-card p-6 border border-border">
            <h3 className="section-subtitle mb-6">Key Information</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <InfoItem label="Name" value="Murari Komati" />
                <InfoItem label="Email" value="murari.komati@example.com" />
                <InfoItem label="Phone" value="+91-9579345054" />
                <InfoItem label="Location" value="Solapur, India" />
                <InfoItem label="Education" value="B.Tech in Electronics and Telecommunication" />
                <InfoItem label="University" value="Ahilyabai Holkar University WIT College" />
                <InfoItem label="Graduation" value="August 2023" />
                <InfoItem label="Grade" value="80.6%" />
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold mb-3">Connect with me:</h4>
                <div className="flex space-x-4">
                  <SocialLink href="https://linkedin.com/in/" label="LinkedIn" />
                  <SocialLink href="https://github.com/" label="GitHub" />
                  <SocialLink href="https://leetcode.com/" label="LeetCode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-muted-foreground text-sm">{label}:</div>
    <div className="font-medium">{value}</div>
  </div>
);

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-4 py-2 bg-muted rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
  >
    {label}
  </a>
);

export default About;
