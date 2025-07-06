import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { useState } from "react";

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
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "mahesh-g-9158a770",
      href: "https://www.linkedin.com/in/mahesh-g-9158a770?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      target: "_blank",
      rel: "noopener noreferrer"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
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
          <Card className="shadow-hero bg-white/90 border border-gray-200">
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
                          target={contact.label === "LinkedIn" ? "_blank" : undefined}
                          rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
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

              {/* Contact Form */}
              <div className="mt-16">
                <Card className="bg-neutral-800 border border-neutral-700 text-white shadow-lg">
                  <CardContent className="p-6 md:p-10">
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center animate-fade-in">Send a Message</h3>
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6" autoComplete="off">
                      {/* Replace 'YOUR_ACCESS_KEY' with your actual Web3Forms access key */}
                      <input type="hidden" name="access_key" value="bef288a3-1c29-4852-ab02-18a34759bc9a" />
                      <div>
                        <Label htmlFor="name" className="text-white">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          className="bg-neutral-700 text-white border-0 focus:ring-2 focus:ring-primary/60 focus:border-primary/60 placeholder:text-neutral-400"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-neutral-700 text-white border-0 focus:ring-2 focus:ring-primary/60 focus:border-primary/60 placeholder:text-neutral-400"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-white">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Type your message..."
                          className="bg-neutral-700 text-white border-0 focus:ring-2 focus:ring-primary/60 focus:border-primary/60 placeholder:text-neutral-400 rounded-lg w-full min-h-[120px] p-3"
                          required
                          aria-required="true"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center animate-fade-in">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="gap-2 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => window.location.href = 'mailto:gattumahesh790@gmail.com'}
                  aria-label="Get in touch via email"
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