import { Handshake, Building2, Ship } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const Alliances = () => {
  return (
    <section id="alliances" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">Alianzas</h2>
            <p className="text-lg text-dot-text leading-relaxed">
              Colaboramos con empresas líderes como Holiwal Space, agencias
              aduanales y transportistas reconocidos. Tu negocio respalda su
              reputación con nuestros socios estratégicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dot-dark">
                    Socios estratégicos
                  </h3>
                  <p className="text-dot-text">
                    Trabajamos con empresas líderes en el sector logístico y de
                    transporte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dot-dark">
                    Agencias aduanales
                  </h3>
                  <p className="text-dot-text">
                    Simplificamos procesos de importación y exportación con
                    aliados confiables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Ship className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dot-dark">
                    Transporte internacional
                  </h3>
                  <p className="text-dot-text">
                    Conexiones con transportistas especializados en cruces
                    fronterizos.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={warehouseImage}
                alt="Instalaciones de almacenamiento"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alliances;
