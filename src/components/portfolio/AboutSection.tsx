import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-secondary rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-primary">Dr. Mahesh G</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full animate-shimmer bg-shimmer bg-size-200"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Transforming businesses through data-driven insights and academic excellence
          </p>
        </div>
        
        <Card className="shadow-colorful hover:shadow-hero transition-all duration-700 border-0 bg-gradient-card backdrop-blur-sm hover:scale-105 group">
          <CardContent className="p-12 md:p-16">
            <div className="prose prose-xl max-w-none leading-relaxed">
              <div className="text-2xl mb-8 text-foreground font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:animate-shimmer">
                🚀 Seasoned data analytics professional and academician with 24+ years of transformative experience
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover/item:animate-glow"></div>
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      My career spans impactful roles in <strong className="text-primary">Spend Analytics</strong>, <strong className="text-primary">Project Management</strong>, <strong className="text-primary">Market Research</strong>, and <strong className="text-primary">Data-Driven Strategic Planning</strong>.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-secondary rounded-full mt-2 group-hover/item:animate-glow"></div>
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      With a <strong className="text-secondary">PhD in Mathematics</strong> and extensive experience in MNCs like <strong className="text-secondary">Genpact</strong> and <strong className="text-secondary">Harsco</strong>, I've led analytical transformations and automated reporting systems.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover/item:animate-glow"></div>
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      Currently serving as <strong className="text-primary">Associate Professor at KMIT, Hyderabad</strong>, driving academic innovation and student development.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-secondary rounded-full mt-2 group-hover/item:animate-glow"></div>
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      I believe in <strong className="text-accent-vibrant">leading by example</strong>, transforming raw data into actionable insights, and using analytics to power organizational growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20 animate-fade-in">
                <p className="text-xl font-bold text-center text-foreground">
                  💡 <span className="text-transparent bg-clip-text bg-gradient-primary">"Data is the new oil, but analytics is the refinery that transforms it into business gold."</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;