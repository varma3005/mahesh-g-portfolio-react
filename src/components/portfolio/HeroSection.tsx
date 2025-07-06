import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import drMaheshPortrait from "@/assets/dr-mahesh-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              <span className="block">Dr. Mahesh G</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-medium">
              Senior Manager | Data Analytics & Strategic Planning Expert
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              24+ Years of Driving Business Transformation Through Data Analytics, 
              Spend Visibility, and Academic Excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                <FileText className="h-5 w-5" />
                View Resume
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-xl opacity-30 scale-110"></div>
              <img
                src={drMaheshPortrait}
                alt="Dr. Mahesh G - Professional Portrait"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-hero border-4 border-primary-foreground/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;