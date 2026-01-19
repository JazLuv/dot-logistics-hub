import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in-up">
            <p className="text-primary font-semibold text-lg mb-4 tracking-wide">
              Dot Logistics & Transport
            </p>
            <h1 className="mb-6">
              Fast, Safe &<br />
              <span className="text-primary">on time.</span>
            </h1>
            <p className="text-xl text-dot-text mb-10 max-w-lg leading-relaxed">
              Soluciones de logística y transporte que proyectan formalidad,
              confianza y rapidez. Con base en Chihuahua y cobertura en
              principales destinos del norte de México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="rounded-full bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              >
                Solicita tu cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border-2 border-dot-dark text-dot-dark hover:bg-dot-dark hover:text-white text-lg px-8 py-6"
              >
                Conocer más
              </Button>
            </div>
          </div>

          {/* Right: Image with Device Frame and Blob */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative Blob */}
            <div className="absolute -z-10 w-[120%] h-[120%] blob-decoration opacity-60 -top-10 -right-10" />
            
            {/* Device Frame */}
            <div className="relative bg-white p-3 rounded-[40px] shadow-2xl max-w-md">
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Dot Logistics Transport Operations"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              {/* Device notch simulation */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-border rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
