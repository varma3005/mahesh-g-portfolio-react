import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl mb-6 text-foreground font-medium">
                I'm Dr. Mahesh G, a seasoned data analytics professional and academician with over 24 years of experience across corporate and educational institutions.
              </p>
              
              <p className="mb-6">
                My career spans impactful roles in <strong className="text-primary">Spend Analytics</strong>, <strong className="text-primary">Project Management</strong>, <strong className="text-primary">Market Research</strong>, <strong className="text-primary">Client Management</strong>, and <strong className="text-primary">Data-Driven Strategic Planning</strong>.
              </p>
              
              <p className="mb-6">
                With a <strong className="text-secondary">PhD in Mathematics</strong> and extensive experience in MNCs like <strong className="text-secondary">Genpact</strong> and <strong className="text-secondary">Harsco</strong>, I've successfully led analytical transformations, automated reporting systems, and delivered insights that shaped global business strategies.
              </p>
              
              <p className="mb-6">
                Currently, I serve as an <strong className="text-primary">Associate Professor at KMIT, Hyderabad</strong>, driving academic innovation and student development.
              </p>
              
              <p className="text-lg font-medium text-foreground">
                I believe in leading by example, transforming raw data into actionable insights, and using analytics to power organizational growth.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;