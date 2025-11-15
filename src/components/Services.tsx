import { Truck, MapPin, Warehouse, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Traslados locales de mercancía",
      description:
        "Soluciones rápidas y seguras de transporte local en Chihuahua y zonas próximas.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Truck,
      title: "Traslados foráneos",
      description:
        "Conectamos Chihuahua con CD. Juárez, Cuauhtémoc, Delicias, Parral, Torreón y más, adaptándonos a las necesidades de tu empresa.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Warehouse,
      title: "Resguardo de material en bodega",
      description:
        "Protege tu inventario con almacenamiento seguro y flexible en nuestras bodegas, ubicadas en CUU.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Globe,
      title: "Convenios con importadoras / agentes aduanales / transporte de cruce",
      description:
        "Simplificamos la logística internacional con alianzas estratégicas y procesos ágiles para importación y exportación.",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Servicios</h2>
          <p className="text-lg text-dot-text max-w-2xl mx-auto">
            Ofrecemos soluciones logísticas integrales adaptadas a las
            necesidades de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl"
            >
              <div className={`p-4 rounded-2xl w-fit mb-6 ${service.color}`}>
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="mb-4 text-dot-dark">{service.title}</h3>
              <p className="text-dot-text leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
