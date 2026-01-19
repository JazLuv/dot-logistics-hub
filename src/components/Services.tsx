import warehouseImage from "@/assets/warehouse.jpg";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Traslados locales de mercancía",
      description: "Tornado hasta 500kgs, Camión 3.5 tons con Caja seca 10 pies, Camión 3500 con plataforma de 16'.",
    },
    {
      number: "02",
      title: "Traslados foráneos",
      description: "Cd. Juárez, Parral, Cuauhtémoc, Delicias, Torreón y más destinos en el norte de México.",
    },
    {
      number: "03",
      title: "Resguardo de material en bodega",
      description: "Protege tu inventario con almacenamiento seguro y flexible en nuestras bodegas ubicadas en Chihuahua.",
    },
    {
      number: "04",
      title: "Logística de Exportación e Importación",
      description: "Convenios con Agentes aduanales, Transportistas certificados y bodegas en Chihuahua, Juárez y El Paso, TX.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column: Text Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Nuestros Servicios
            </p>
            <h2 className="mb-6">
              Soluciones Logísticas<br />
              <span className="text-primary">Integrales</span>
            </h2>
            <p className="text-lg text-dot-text mb-12 leading-relaxed">
              Ofrecemos soluciones logísticas adaptadas a las necesidades de tu
              negocio con la más alta calidad y compromiso.
            </p>

            {/* Services List with Numbering */}
            <div className="space-y-8">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="flex gap-6 group"
                >
                  <span className="text-4xl font-extrabold text-primary/20 group-hover:text-primary transition-colors">
                    {service.number}
                  </span>
                  <div className="border-b border-border pb-6 flex-1">
                    <h3 className="text-dot-dark mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-dot-text leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Vertical Image */}
          <div className="lg:sticky lg:top-32">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={warehouseImage}
                alt="Servicios de almacenamiento y logística"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
