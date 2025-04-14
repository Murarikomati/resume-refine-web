
import { useState } from "react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobExperience {
  id: string;
  company: string;
  title: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<string>("advania");

  const experiences: JobExperience[] = [
    {
      id: "advania",
      company: "Advania UK Limited",
      title: "Data Engineer-Trainee",
      location: "Solapur, India",
      period: "April 2024 – August 2024",
      description: "Real-Time Data Orchestration in Azure with Medallion Architecture",
      responsibilities: [
        "Designed and implemented end-to-end ETL pipelines using Azure Data Factory to integrate data from Dataverse, Synapse, and APIs into Azure Data Lake Storage Gen2",
        "Eliminated 100% of manual data loading by implementing automated incremental data loading processes",
        "Implemented Medallion Architecture in Databricks to optimize data governance and ensure 100% data quality",
        "Developed complex data transformations using Spark and Python, structuring raw data for analytics and reporting",
        "Built CI/CD pipelines with Azure DevOps to automate workflow deployments, reducing deployment time by 40%",
        "Collaborated with stakeholders to design optimized data models and schemas for Enterprise Data Warehouse (EDW), improving query performance by 25%",
        "Created comprehensive technical documentation detailing data flows, transformations, and intended business use cases"
      ]
    },
    {
      id: "mcdonalds",
      company: "McDonald's",
      title: "Data Engineer-Full Time",
      location: "Solapur, India",
      period: "October 2024 – December 2024",
      description: "Real-Time Transaction Analytics in Azure with Medallion Architecture",
      responsibilities: [
        "Extracted and integrated data from SAP HANA using Azure Data Factory and Kafka for real-time data processing",
        "Designed and implemented Medallion Architecture in Databricks, focusing on data quality and governance",
        "Developed Slowly Changing Dimensions (SCD) Type 1 and Type 2 for historical transaction data management",
        "Optimized Spark transformations for 100GB+ daily transaction data using Liquid Clusters and Broadcast Joins, achieving 60-70% performance improvement",
        "Designed and created interactive KPIs and Power BI dashboards from scratch with DAX queries, providing business insights that led to 40% sales margin increase"
      ]
    }
  ];

  const selectedExperience = experiences.find(exp => exp.id === activeExperience) || experiences[0];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container section-container">
        <h2 className="section-title text-center mb-12">Professional Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Experience tabs - vertical on desktop, horizontal scrolling on mobile */}
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 sticky top-20">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={cn(
                    "px-4 py-3 text-left rounded-lg whitespace-nowrap lg:whitespace-normal transition-colors",
                    activeExperience === exp.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  )}
                >
                  <div className="font-medium">{exp.company}</div>
                  <div className="text-sm opacity-80">{exp.title}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience details */}
          <div className="lg:col-span-9">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{selectedExperience.title}</h3>
                <h4 className="text-xl font-semibold text-primary mb-1">{selectedExperience.company}</h4>
                <p className="text-lg font-medium text-secondary mb-4">{selectedExperience.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    <span>{selectedExperience.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{selectedExperience.location}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3">Key Responsibilities & Achievements:</h5>
                <ul className="space-y-3 ml-6 list-disc">
                  {selectedExperience.responsibilities.map((item, index) => (
                    <li key={index} className="text-foreground/90">{item}</li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <h5 className="font-semibold mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.id === "advania" ? (
                      <>
                        {["Azure DevOps", "Python", "SQL", "Apache Spark", "ADF", "pytest", "Synapse Analytics", "Databricks"].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-full">{tech}</span>
                        ))}
                      </>
                    ) : (
                      <>
                        {["Azure", "Databricks", "Python", "Spark", "Kafka", "SAP HANA", "ADF", "Power BI", "DAX"].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-full">{tech}</span>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
