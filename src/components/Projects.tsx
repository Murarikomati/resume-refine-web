
import { useState } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "chatbot",
      title: "Real-Time Data Integration & RAG-Based Chatbot",
      date: "Jan 2025 - Feb 2025",
      type: "Gen AI | ChatBot",
      description: "An end-to-end solution for integrating unstructured data from multiple sources and building a Retrieval-Augmented Generation based chatbot for enterprise use.",
      keyPoints: [
        "Developed end-to-end data integration pipelines using Azure Data Factory to ingest unstructured data from SSMS, websites, and PDF/XML files into ADLS Gen2",
        "Processed and transformed data with Unstructed, BeautifulSoup, and Databricks tools by achieving 80% accuracy",
        "Managed models with Unity Catalog and MLflow, deploying via a serving endpoint"
      ],
      technologies: ["Databricks", "Langchain", "MLflow", "LLM", "Spark", "Azure Data Factory", "Firecrawl", "BeautifulSoup"],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZyiLIyHGnzwSv4rpaxYAPi5cyrsfOgty2CoAf1Dcst27Bqo5QwL98CCr27RObFNX6eY&usqp=CAU"
    },
    {
      id: "traffic",
      title: "Traffic Management System",
      date: "Sep 2022 - April 2023",
      type: "Computer Vision | Image Processing",
      description: "An intelligent traffic management system that dynamically adjusts traffic signals based on real-time traffic density using computer vision techniques.",
      keyPoints: [
        "Developed an ML model to dynamically adjust traffic signals based on real-time traffic density",
        "Improved model performance by 98% through fine-tuning",
        "Reduced traffic delays by 25% during peak hours through optimized signal timing"
      ],
      technologies: ["Python", "OpenCV", "Pygame", "Numpy", "Pandas"],
      imageUrl: "/placeholder.svg"
    }
  ];

  const handleProjectClick = (projectId: string) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container section-container">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={cn(
                "group bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md",
                activeProject === project.id && "ring-2 ring-primary"
              )}
            >
              <div 
                className="h-48 bg-muted relative overflow-hidden"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="text-sm text-primary-foreground/90 hover:text-primary font-medium"
                    >
                      {activeProject === project.id ? "View Less" : "View More"}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
                
                <p className="text-foreground/80 mb-4">
                  {project.description}
                </p>
                
                {activeProject === project.id && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="ml-5 space-y-1 list-disc text-foreground/80">
                        {project.keyPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={cn(
                  "flex justify-end gap-2 mt-4",
                  activeProject === project.id ? "pt-4 border-t border-border" : ""
                )}>
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
