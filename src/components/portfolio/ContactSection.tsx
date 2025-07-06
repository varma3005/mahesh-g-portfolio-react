import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "gattumahesh790@gmail.com",
      href: "mailto:gattumahesh790@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone", 
      value: "+91 95817 74878",
      href: "tel:+919581774878"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      label: "Languages",
      value: "English | Hindi | Telugu",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary-foreground mx-auto rounded-full"></div>
          <p className="text-xl text-primary-foreground/80 mt-8 max-w-2xl mx-auto">
            Ready to drive data-driven transformation in your organization? Let's discuss how my expertise can help achieve your business goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-hero bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-foreground/70 mb-1">
                        {contact.label}
                      </p>
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href}
                          className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-primary-foreground font-medium">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="gap-2 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = 'mailto:gattumahesh790@gmail.com'}
                >
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;