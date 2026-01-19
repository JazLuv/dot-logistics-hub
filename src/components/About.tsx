import { Target, Eye, FileCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Small subtitle in primary color */}
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            ¿Quiénes somos?
          </p>
          {/* Main title in black */}
          <h2 className="mb-8">¡Un Gusto Conocerte!</h2>
          <p className="text-lg text-dot-text leading-relaxed">
            Somos una empresa 100% chihuahuense con presencia en el mercado
            transportista desde el 2016, respaldada por más de 15 años de
            experiencia en el ramo. Contribuimos a la industria maquiladora y a
            las Pymes de Chihuahua mediante el traslado de materiales de manera
            eficaz, segura y a tiempo.
          </p>
          <p className="text-lg text-dot-text leading-relaxed mt-4">
            En DOT Logistics & Transport nos caracteriza el compromiso con el
            cuidado de las mercancías y la transparencia en cada movimiento.
            Contamos con monitoreo satelital 24/7, lo que permite a nuestros
            clientes conocer la ubicación de su carga en todo momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Misión */}
          <div className="p-8 rounded-[40px] border border-border hover:shadow-lg transition-all duration-300 bg-background">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 border border-dot-dark rounded-2xl">
                <Target className="h-6 w-6 text-dot-dark" strokeWidth={1.5} />
              </div>
              <h3 className="text-dot-dark">Misión</h3>
            </div>
            <p className="text-dot-text leading-relaxed">
              Ofrecer soluciones de transporte seguro, puntual y confiable
              dentro del estado de Chihuahua, brindando atención personalizada y
              un servicio profesional que garantice la tranquilidad de nuestros
              clientes.
            </p>
          </div>

          {/* Visión */}
          <div className="p-8 rounded-[40px] border border-border hover:shadow-lg transition-all duration-300 bg-background">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 border border-dot-dark rounded-2xl">
                <Eye className="h-6 w-6 text-dot-dark" strokeWidth={1.5} />
              </div>
              <h3 className="text-dot-dark">Visión</h3>
            </div>
            <p className="text-dot-text leading-relaxed">
              Ser la empresa de transporte local más confiable de Chihuahua,
              destacada por su puntualidad, seguridad y excelencia operativa,
              incorporando tecnología y mejora continua.
            </p>
          </div>

          {/* Valores */}
          <div className="p-8 rounded-[40px] border border-border hover:shadow-lg transition-all duration-300 bg-background md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 border border-dot-dark rounded-2xl">
                <FileCheck className="h-6 w-6 text-dot-dark" strokeWidth={1.5} />
              </div>
              <h3 className="text-dot-dark">Valores</h3>
            </div>
            <p className="text-dot-text leading-relaxed">
              Puntualidad, Seguridad, Confiabilidad, Atención Personalizada,
              Profesionalismo, Innovación y Trabajo en Equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
