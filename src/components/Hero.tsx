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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dot Logistics Transport"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-dot-dark">
            Delivery on Time
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-accent mb-8">
            Fast, safe and on time
          </p>
          <p className="text-xl text-dot-text mb-12 max-w-2xl">
            Soluciones de logística y transporte que proyectan formalidad,
            confianza y rapidez. Con base en Chihuahua y cobertura en
            principales destinos del norte de México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="rounded-full bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] hover:scale-105 transition-transform text-lg px-8"
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
              className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
            >
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
