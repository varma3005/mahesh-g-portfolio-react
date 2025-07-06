import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const industryProjects = [
    {
      title: "Spend Visibility Analysis",
      description: "$3.5B direct/indirect classification using DnB master data",
      type: "Industry"
    },
    {
      title: "SOR Analyzer Tool", 
      description: "Excel VBA tool generating 300+ visualizations for business savings",
      type: "Industry"
    },
    {
      title: "Enigma Budget Tool",
      description: "Forecasted budgets for multinational clients using Excel-based tools",
      type: "Industry"
    },
    {
      title: "Category Management",
      description: "Savings discovery through pricing trends and sourcing collaboration",
      type: "Industry"
    },
    {
      title: "Working Capital Analysis",
      description: "Payment term analytics reported to CFO for dollar impact tracking",
      type: "Industry"
    }
  ];

  const academicProjects = [
    {
      title: "Result & Performance Analytics",
      description: "Drill-down of academic performance from branch to student",
      type: "Academic"
    },
    {
      title: "CO & PO Analysis", 
      description: "Post-semester outcome analysis to restructure curriculum effectively",
      type: "Academic"
    }
  ];

  const researchWork = [
    {
      title: "Research Publications",
      description: "10+ research papers published in Scopus/Web of Science journals", 
      type: "Research"
    },
    {
      title: "Mathematical Methods Development",
      description: "Developed novel iterative methods in singular perturbation & root-finding problems",
      type: "Research"
    },
    {
      title: "Conference Participation",
      description: "Participated in 10+ international conferences",
      type: "Research"
    }
  ];

  const allProjects = [...industryProjects, ...academicProjects, ...researchWork];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Industry": return "bg-primary text-primary-foreground";
      case "Academic": return "bg-secondary text-secondary-foreground";
      case "Research": return "bg-accent-foreground text-accent";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Projects & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getTypeColor(project.type)}>
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;