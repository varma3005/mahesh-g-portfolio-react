import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "PhD in Mathematics",
      institution: "University College of Science, Osmania University",
      year: "2018",
      icon: "🎓"
    },
    {
      degree: "MPhil in Statistics", 
      institution: "University College of Science, Osmania University",
      year: "2004",
      icon: "📘"
    },
    {
      degree: "MSc in Applied Mathematics",
      institution: "NIT Warangal",
      year: "1998",
      note: "Merit Scholarship holder",
      icon: "📊"
    },
    {
      degree: "BSc in Mathematics, Physics & Chemistry",
      institution: "A.V. College, Osmania University", 
      year: "1996",
      icon: "🔬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-secondary font-semibold mb-2">
                      {edu.year}
                    </p>
                    {edu.note && (
                      <p className="text-sm text-muted-foreground italic">
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;