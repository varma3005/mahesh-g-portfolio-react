import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Associate Professor",
      company: "KMIT, Hyderabad", 
      period: "Jan 2022 – Present",
      icon: "🎓",
      highlights: [
        "Mentoring students and leading institutional academic analytics projects",
        "Result Analysis: Pass/fail trends, merit ranking, and curriculum improvement",
        "CO & PO Attainment Analysis: Academic performance tracking aligned with institutional objectives"
      ]
    },
    {
      title: "Senior Business Analyst",
      company: "Harsco, Hyderabad",
      period: "Feb 2015 – Aug 2015", 
      icon: "📊",
      highlights: [
        "Led Spend Visibility projects worth $3.5B using advanced classification techniques",
        "Built and automated SOP-based reports using JD Edwards data extraction",
        "Developed tools and processes to identify cost-saving opportunities"
      ]
    },
    {
      title: "Manager",
      company: "Genpact, Hyderabad",
      period: "Jul 2007 – Feb 2015",
      icon: "🏢",
      highlights: [
        "Led AstraZeneca Spend Analysis transition from UK to India",
        "Managed team of 4 analysts in executing large-scale cost optimization projects", 
        "Delivered operational and spend analysis reports across multiple global clients",
        "Won multiple awards including Operational Excellence and Lean ACE"
      ]
    },
    {
      title: "Previous Academic Roles",
      company: "Various Institutions",
      period: "1998 – 2022",
      icon: "🏫",
      highlights: [
        "Geethanjali College of Engg. & Tech., Hyderabad (2015–2022, 2005–2007)",
        "Mahaveer Institute of Science & Technology, Hyderabad (2001–2005)", 
        "Pragathi PG College, Hyderabad (1998–2001)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{exp.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      {exp.company}
                    </p>
                    <Badge variant="outline" className="border-secondary/30 text-secondary">
                      {exp.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;