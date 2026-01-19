import { Handshake, Building2, Ship } from "lucide-react";
import loadingImage from "@/assets/loading.jpg";

const Alliances = () => {
  return (
    <section id="alliances" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Colaboraciones
            </p>
            <h2 className="mb-6">Nuestras Alianzas</h2>
            <p className="text-lg text-dot-text leading-relaxed max-w-3xl mx-auto">
              Colaboramos con empresas líderes como Honeywell Aerospace,
              Honeywell Optoelectrónica, GPA, Makinovo, HT-MX, Suministros
              Industriales Especializados 3A, Bepensa Motriz, entre otros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="p-3 border border-dot-dark rounded-2xl flex-shrink-0 group-hover:border-primary transition-colors">
                  <Handshake className="h-6 w-6 text-dot-dark group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dot-dark">
                    Socios estratégicos
                  </h3>
                  <p className="text-dot-text leading-relaxed">
                    Trabajamos con empresas líderes en el sector logístico y de
                    transporte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-3 border border-dot-dark rounded-2xl flex-shrink-0 group-hover:border-primary transition-colors">
                  <Building2 className="h-6 w-6 text-dot-dark group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dot-dark">
                    Agencias aduanales
                  </h3>
                  <p className="text-dot-text leading-relaxed">
                    Simplificamos procesos de importación y exportación con
                    aliados confiables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-3 border border-dot-dark rounded-2xl flex-shrink-0 group-hover:border-primary transition-colors">
                  <Ship className="h-6 w-6 text-dot-dark group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dot-dark">
                    Transporte internacional
                  </h3>
                  <p className="text-dot-text leading-relaxed">
                    Conexiones con transportistas especializados en cruces
                    fronterizos.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] overflow-hidden shadow-xl">
              <img
                src={loadingImage}
                alt="Operaciones de carga y descarga"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alliances;
