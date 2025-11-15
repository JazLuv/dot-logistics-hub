import { Target, Eye, Award, Shield, Zap, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    { icon: CheckCircle, title: "Compromiso", color: "text-primary" },
    { icon: Shield, title: "Seguridad", color: "text-accent" },
    { icon: Award, title: "Transparencia", color: "text-primary" },
    { icon: Zap, title: "Agilidad", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-6">Quiénes somos</h2>
          <p className="text-lg text-dot-text leading-relaxed">
            En Dot Logistics & Transport, nos especializamos en soluciones de
            logística y transporte que proyectan formalidad, confianza y
            rapidez. Con base en Chihuahua y cobertura en principales destinos
            del norte de México, nuestra misión es brindar servicios eficientes
            y seguros, siempre orientados a satisfacer tus necesidades
            logísticas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Misión */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-primary">Misión</h3>
            </div>
            <p className="text-dot-text">
              Facilitar el transporte y resguardo de mercancías con procesos
              seguros, transparentes y eficientes.
            </p>
          </Card>

          {/* Visión */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-accent">Visión</h3>
            </div>
            <p className="text-dot-text">
              Ser el referente en logística integral y transporte para empresas
              nacionales e internacionales, reconocidos por nuestra
              confiabilidad y atención personalizada.
            </p>
          </Card>
        </div>

        {/* Valores */}
        <div className="text-center mb-8">
          <h3 className="text-dot-dark">Nuestros Valores</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <value.icon className={`h-10 w-10 ${value.color}`} />
              <p className="font-semibold text-dot-dark">{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
