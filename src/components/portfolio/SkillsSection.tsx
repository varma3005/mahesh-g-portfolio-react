import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const coreExpertise = [
    "Spend Analytics & Cost Optimization",
    "Sales & Market Research Analysis", 
    "Strategic Planning & Business Consultation",
    "Client Retention & Relationship Management",
    "Project & People Management",
    "Training & Development"
  ];

  const technicalSkills = [
    "Python", "Tableau", "MATLAB", "VBA",
    "MS Excel (Advanced)", "SQL", "MS Access",
    "Minitab (Six Sigma)"
  ];

  const certifications = [
    { name: "Lean ACE Certified", issuer: "Genpact" },
    { name: "Six Sigma Green Belt", issuer: "Genpact" },
    { name: "Operational Excellence Award", issuer: "Genpact" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expertise & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Core Expertise */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-primary">Core Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {coreExpertise.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-accent hover:bg-accent-hover transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-secondary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-primary-muted/50 border border-primary/20"
                  >
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;