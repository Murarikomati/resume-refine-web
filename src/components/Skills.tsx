
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cloudSkills: Skill[] = [
    { name: "Azure", level: 90, category: "cloud" },
    { name: "AWS", level: 75, category: "cloud" },
    { name: "Databricks", level: 95, category: "cloud" },
    { name: "Microsoft Fabric", level: 85, category: "cloud" },
    { name: "Azure Data Factory", level: 90, category: "cloud" },
    { name: "Azure DevOps", level: 80, category: "cloud" },
  ];

  const languageSkills: Skill[] = [
    { name: "Python", level: 95, category: "language" },
    { name: "SQL", level: 90, category: "language" },
    { name: "PySpark", level: 85, category: "language" },
    { name: "Spark SQL", level: 85, category: "language" },
    { name: "Kafka", level: 70, category: "language" },
    { name: "Hadoop", level: 75, category: "language" },
    { name: "MySQL", level: 80, category: "language" },
    { name: "C++", level: 65, category: "language" },
    { name: "Machine Learning", level: 75, category: "language" },
  ];

  const librarySkills: Skill[] = [
    { name: "Langchain", level: 80, category: "library" },
    { name: "NLTK", level: 75, category: "library" },
    { name: "Pytorch", level: 70, category: "library" },
    { name: "TensorFlow", level: 65, category: "library" },
    { name: "Pandas", level: 90, category: "library" },
    { name: "Matplotlib", level: 85, category: "library" },
    { name: "Numpy", level: 90, category: "library" },
    { name: "Scikit-learn", level: 80, category: "library" },
    { name: "OpenCV", level: 75, category: "library" },
    { name: "Pygame", level: 60, category: "library" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container section-container">
        <h2 className="section-title text-center mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Cloud & Platforms" 
            skills={cloudSkills} 
            isVisible={isVisible} 
            delayOffset={0}
          />
          
          <SkillCategory 
            title="Languages & Databases" 
            skills={languageSkills} 
            isVisible={isVisible} 
            delayOffset={5}
          />
          
          <SkillCategory 
            title="Libraries & Frameworks" 
            skills={librarySkills} 
            isVisible={isVisible} 
            delayOffset={10}
          />
        </div>

        <div className="mt-16 p-6 bg-card rounded-xl border border-border shadow-sm">
          <h3 className="section-subtitle">Other Skills & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {["Git", "GitHub", "VS Code", "Jupyter", "CI/CD", "Docker", "REST APIs", "Agile"].map((tool, index) => (
              <div 
                key={tool}
                className={cn(
                  "px-4 py-2 bg-muted rounded-lg text-center font-medium text-foreground/80 hover:bg-primary/10 transition-colors",
                  isVisible && "fade-in"
                )}
                style={{ "--delay": (20 + index) } as React.CSSProperties}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  isVisible: boolean;
  delayOffset: number;
}

const SkillCategory = ({ title, skills, isVisible, delayOffset }: SkillCategoryProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-primary">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground text-sm">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className={cn(
                  "skill-progress w-0",
                  isVisible && "transition-all duration-1000 ease-out"
                )}
                style={{ 
                  width: isVisible ? `${skill.level}%` : "0%",
                  transitionDelay: `${(delayOffset + index) * 100}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
