import { Card, CardContent } from "@/components/ui/card";

const AwardsSection = () => {
  const awards = [
    {
      title: "Operational Excellence Award",
      organization: "Genpact",
      icon: "🏆",
      description: "Recognition for outstanding performance in analytical transformations"
    },
    {
      title: "Lean ACE Certificate", 
      organization: "Genpact",
      icon: "✅",
      description: "Advanced certification in lean methodologies and process optimization"
    },
    {
      title: "Six Sigma Green Belt",
      organization: "Genpact", 
      icon: "📗",
      description: "Certified in Six Sigma quality improvement methodologies"
    },
    {
      title: "International Publications",
      organization: "Academic Journals",
      icon: "✍️",
      description: "Published 10 international journal papers in Mathematics"
    },
    {
      title: "Merit Scholar",
      organization: "NIT Warangal",
      icon: "🏅", 
      description: "Topper, 1st Year MSc Applied Mathematics"
    }
  ];

  const trainings = [
    {
      title: "Analytical Boot Camp",
      organization: "Genpact",
      year: "2007",
      icon: "📊"
    },
    {
      title: "Spend Management Tool",
      organization: "Ariba", 
      year: "2010",
      icon: "🛠️"
    },
    {
      title: "Project Management Seminar",
      organization: "PMA, New Delhi",
      year: "2011", 
      icon: "🧠"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{award.icon}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {award.title}
                  </h4>
                  <p className="text-primary font-medium mb-3">
                    {award.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trainings */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Professional Training</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{training.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {training.title}
                  </h4>
                  <p className="text-secondary font-medium mb-1">
                    {training.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {training.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;