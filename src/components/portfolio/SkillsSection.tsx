import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const coreExpertise = [
    { skill: "Spend Analytics & Cost Optimization", icon: "💰", level: 95 },
    { skill: "Sales & Market Research Analysis", icon: "📊", level: 90 },
    { skill: "Strategic Planning & Business Consultation", icon: "🎯", level: 92 },
    { skill: "Client Retention & Relationship Management", icon: "🤝", level: 88 },
    { skill: "Project & People Management", icon: "👥", level: 85 },
    { skill: "Training & Development", icon: "🎓", level: 87 }
  ];

  const technicalSkills = [
    { name: "Python", level: "Expert", color: "bg-blue-600" },
    { name: "Tableau", level: "Expert", color: "bg-blue-600" },
    { name: "MATLAB", level: "Advanced", color: "bg-blue-600" },
    { name: "VBA", level: "Expert", color: "bg-blue-600" },
    { name: "MS Excel (Advanced)", level: "Expert", color: "bg-blue-600" },
    { name: "SQL", level: "Advanced", color: "bg-blue-600" },
    { name: "MS Access", level: "Intermediate", color: "bg-blue-600" },
    { name: "Minitab (Six Sigma)", level: "Advanced", color: "bg-blue-600" }
  ];

  const certifications = [
    { name: "Lean ACE Certified", issuer: "Genpact", icon: "✅", year: "2015" },
    { name: "Six Sigma Green Belt", issuer: "Genpact", icon: "📗", year: "2014" },
    { name: "Operational Excellence Award", issuer: "Genpact", icon: "🏆", year: "2013" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-mesh rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-primary rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-primary">Skills</span> & Expertise
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full animate-shimmer bg-shimmer bg-size-200"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Mastering the art and science of data analytics across multiple domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Core Expertise with Progress Bars */}
          <Card className="shadow-colorful hover:shadow-hero transition-all duration-700 border-0 bg-gradient-card backdrop-blur-sm hover:scale-105 group">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-yellow-400 flex items-center justify-center gap-2">
                <span className="text-3xl animate-float">🎯</span>
                Core Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreExpertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 mb-4 animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <span className="text-2xl md:text-3xl text-white">{item.icon}</span>
                    <span className="text-base md:text-lg font-bold text-white">
                      {item.skill}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="shadow-colorful hover:shadow-hero transition-all duration-700 border-0 bg-gradient-card backdrop-blur-sm hover:scale-105 group">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-secondary flex items-center justify-center gap-2">
                <span className="text-3xl animate-float">⚡</span>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 justify-center items-center">
                {technicalSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className={`bg-blue-600 text-white border-0 hover:shadow-blue-400 hover:scale-105 transition-all duration-300 px-3 py-2 text-base flex flex-col items-center gap-1 group/badge`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <span className="font-bold text-base group-hover/badge:animate-shimmer">{skill.name}</span>
                    <span className="text-sm opacity-90">{skill.level}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-colorful hover:shadow-hero transition-all duration-700 border-0 bg-gradient-card backdrop-blur-sm hover:scale-105 group">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-accent-vibrant flex items-center justify-center gap-2">
                <span className="text-3xl animate-float">🏅</span>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-primary/10 border border-primary/20 hover:bg-gradient-primary/20 transition-all duration-500 hover:scale-105 group/cert animate-slide-in-right"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl group-hover/cert:animate-bounce">{cert.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-sm mb-1 group-hover/cert:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                        <p className="text-xs text-primary font-semibold">{cert.year}</p>
                      </div>
                    </div>
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