import { Button } from "@/components/ui/button";
import { Mail, FileText, Download, ExternalLink } from "lucide-react";
// import drMaheshPortrait from "@/assets/dr-mahesh-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
  {/* Mobile overlay for background effects if needed */}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-mesh rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-glow/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center px-2 sm:px-4 py-12 md:py-20 min-h-screen w-full">
        <div className="container mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Enhanced Content */}
            <div className="text-center lg:text-left animate-fade-in px-2 sm:px-0">
              <div className="mb-6">
                <span className="inline-block px-6 py-2 bg-yellow-400 text-gray-900 rounded-full text-lg font-bold shadow-lg ring-2 ring-yellow-200">
                  ✨ 24+ Years of Excellence
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-primary mb-6 leading-tight">
                <span className="block animate-slide-in-left">Dr. Mahesh G</span>
              </h1>
              
              <h2 className="text-lg sm:text-2xl md:text-3xl text-foreground/95 mb-8 font-bold animate-slide-in-right">
                Senior Manager | Data Analytics & Strategic Planning Expert
              </h2>
              
              <p className="text-base sm:text-lg md:text-2xl text-foreground/85 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in font-bold">
                Transforming Raw Data into <span className="text-accent-vibrant font-black">Strategic Insights</span> that Drive 
                <span className="text-secondary-glow font-black"> Business Excellence</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start animate-bounce-in w-full sm:w-auto">
                <a href="#contact" className="focus:outline-none w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="gap-3 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 shadow-colorful hover:shadow-glow transition-all duration-500 backdrop-blur-sm border border-primary/30 group font-bold w-full sm:w-auto"
                >
                  <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-black">Let's Connect</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </a>
                
                <a href="/Mahesh%20resume%20latest.docx" download className="focus:outline-none w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-3 bg-white border-2 border-primary/30 text-blue-700 hover:bg-primary/10 hover:text-blue-800 hover:border-primary/50 hover:scale-105 shadow transition-all duration-300 group font-bold w-full sm:w-auto"
                >
                  <Download className="h-6 w-6 group-hover:animate-bounce" />
                  <span className="font-black">Download Resume</span>
                </Button>
              </a>
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center lg:justify-start mt-8 md:mt-12 animate-fade-in">
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
            <div className="flex justify-center lg:justify-end animate-scale-in mt-8 md:mt-0">
              <div className="relative group mt-2 md:mt-4 w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Static rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-secondary opacity-30 blur-xl"></div>
                
                {/* Main image container - FIXED POSITION */}
                <div className="relative w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  <img
                    src={"/WhatsApp Image 2025-07-06 at 21.28.29_ebf2bad2.jpg"}
                    alt="Dr. Mahesh G - Professional Portrait"
                    className="relative w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover object-center rounded-full shadow-hero border-4 border-primary/30 scale-95 group-hover:scale-105 transition-all duration-700 backdrop-blur-sm translate-y-2"
                  />
                  
                  {/* Fixed badges */}
                  <div className="absolute -top-2 -right-2 xs:-top-4 xs:-right-4 bg-white text-blue-700 px-3 xs:px-5 py-1.5 xs:py-2 rounded-full text-xs xs:text-base font-bold shadow-lg ring-2 ring-blue-200">
                    PhD ✨
                  </div>
                  <div className="absolute -bottom-2 -left-8 xs:-bottom-4 xs:-left-20 bg-white text-blue-700 px-3 xs:px-5 py-1.5 xs:py-2 rounded-full text-xs xs:text-base font-bold shadow-lg ring-2 ring-blue-200">
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