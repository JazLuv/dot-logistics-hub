import { Target, Eye, Award, Shield, Zap, CheckCircle, FileCheck } from "lucide-react";
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
          Somos una empresa 100% chihuahuense con presencia en el mercado transportista desde el 2016  respaldad por mas de 15 años de experiencia en el ramo.
          Contribuimos a la industria maquiladora y a las Pymes de Chihuahua mediante el traslado de materiales de manera eficaz, segura y a tiempo.
          En DOT Logistics & Transport nos caracteriza el compromiso con el cuidado de las mercancías y la transparencia en cada movimiento. 
          Contamos con monitoreo satelital 24/7, lo que permite a nuestros clientes conocer la ubicación de su carga en todo momento y tener la tranquilidad de que su envío esta siendo manejado con responsabilidad y profesionalismo.
          Realizamos movimientos en el estado de Chihuahua ofreciendo soluciones logísticas confiables, puntuales y adaptadas a las necesidades de cada cliente.
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
            Ofrecer soluciones de transporte seguro, puntual y confiable dentro del estado de Chihuahua,
            brindando atención personalizada y un servicio profesional que garantice la tranquilidad de nuestros
            clientes.

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
            Ser la empresa de transporte local más confiable de Chihuahua, destacada por su puntualidad,
            seguridad y excelencia operativa, incorporando tecnología y mejora continua para convertirnos en el
            aliado logístico preferido de la región.
            </p>
          </Card>

        </div>

        {/* Valores */}
        <Card className="mx-auto max-w-4xl w-full p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl">
            
            {/* Encabezado de la tarjeta */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <FileCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-accent">Nuestros Valores</h3>
            </div>

            {/* Texto */}
            <p className="text-dot-text">
              Puntualidad – Cumplimos cada entrega a tiempo. Seguridad – Cuidamos cada carga como propia.
              Confiabilidad – Actuamos con transparencia y responsabilidad. Atención Personalizada – Adaptamos
              cada servicio a las necesidades del cliente. Profesionalismo – Operación ética, ordenada y de alta
              calidad. Innovación – Uso de tecnología y mejora constante. Trabajo en Equipo – Coordinación y
              compromiso en cada servicio.
            </p>
          </Card>
      </div>
    </section>
  );
};

export default About;
