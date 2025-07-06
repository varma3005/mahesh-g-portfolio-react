import { Button } from "@/components/ui/button";
import { Mail, FileText, Download, ExternalLink } from "lucide-react";
import drMaheshPortrait from "@/assets/dr-mahesh-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-mesh rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-glow/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center px-4 py-20 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium border border-white/20 animate-shimmer bg-shimmer bg-size-200">
                  ✨ 24+ Years of Excellence
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight">
                <span className="block animate-slide-in-left">Dr. Mahesh G</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-foreground/95 mb-8 font-bold animate-slide-in-right">
                Senior Manager | Data Analytics & Strategic Planning Expert
              </h2>
              
              <p className="text-xl md:text-2xl text-foreground/85 mb-12 leading-relaxed max-w-2xl animate-fade-in font-bold">
                Transforming Raw Data into <span className="text-accent-vibrant font-black">Strategic Insights</span> that Drive 
                <span className="text-secondary-glow font-black"> Business Excellence</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-bounce-in">
                <Button 
                  size="lg" 
                  className="gap-3 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 shadow-colorful hover:shadow-glow transition-all duration-500 backdrop-blur-sm border border-primary/30 group font-bold"
                >
                  <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-black">Let's Connect</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-3 border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-500 backdrop-blur-sm group font-bold"
                >
                  <Download className="h-6 w-6 group-hover:animate-bounce" />
                  <span className="font-black">Download Resume</span>
                </Button>
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 animate-fade-in">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">24+</div>
                  <div className="text-foreground/70 text-sm font-bold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">$3.5B</div>
                  <div className="text-foreground/70 text-sm font-bold">Analyzed Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">10+</div>
                  <div className="text-foreground/70 text-sm font-bold">Publications</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative group">
                {/* Static rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-secondary opacity-30 blur-xl"></div>
                
                {/* Main image container - FIXED POSITION */}
                <div className="relative">
                  <img
                    src={drMaheshPortrait}
                    alt="Dr. Mahesh G - Professional Portrait"
                    className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] object-cover rounded-full shadow-hero border-4 border-primary/30 group-hover:scale-105 transition-all duration-700 backdrop-blur-sm"
                  />
                  
                  {/* Fixed badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-primary text-foreground px-4 py-2 rounded-full text-sm font-bold shadow-glow">
                    PhD ✨
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-secondary text-foreground px-4 py-2 rounded-full text-sm font-bold shadow-glow">
                    Analytics Expert 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;