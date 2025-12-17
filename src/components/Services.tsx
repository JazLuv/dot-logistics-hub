import { Truck, MapPin, Warehouse, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Traslados locales de mercancía",
      description: [
        "Tornado hasta 500kgs",
        "Camion 3.5 tons con Caja seca 10 pies",
        "Camion 3500 con plataforma de 16'",
      ],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Truck,
      title: "Traslados foráneos",
      description: [
        "Cd. Juarez",
        "Parral",
        "Cuauhtemoc",
        "Delicias",
        "Torreón"
      ],
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
      title: "Logistica de Exportación e Importacion",
      description:
        "Convenios con Agentes aduanales, Transportistas certificados y bodegas en Chihuahua, Juarez y El Paso, Tx.",
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
            necesidades de tu negocio:
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
              
              {/* AQUÍ ESTÁ LA MAGIA: Condición para lista vs texto */}
              <div className="text-dot-text leading-relaxed">
                {Array.isArray(service.description) ? (
                  // Si es lista (Array), usa <ul>
                  <ul className="list-disc pl-5 space-y-1">
                    {service.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  // Si es texto normal, usa <p>
                  <p>{service.description}</p>
                )}
              </div>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;