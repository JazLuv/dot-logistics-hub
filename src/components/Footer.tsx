import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dot-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Dot</span> Logistics & Transport
            </div>
            <p className="text-gray-300">
              Soluciones de logística y transporte rápidas, seguras y a tiempo.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:ecarrete@dotlogistics.mx"
                  className="hover:text-primary transition-colors"
                >
                  ecarrete@dotlogistics.mx
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="tel:6141592833"
                  className="hover:text-accent transition-colors"
                >
                  614 159 2833
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Calle García Salinas 5916
                  <br />
                  Col. Las Granjas, Chihuahua
                </p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-accent/10 hover:bg-accent/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Dot Logistics & Transport. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Datos fiscales y legales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
