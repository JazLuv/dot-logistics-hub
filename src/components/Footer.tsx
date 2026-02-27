import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-extrabold mb-4 tracking-tight">
              <span className="text-primary">Dot</span>{" "}
              <span className="text-dot-dark">Logistics</span>
            </div>
            <p className="text-dot-text leading-relaxed">
              Soluciones de logística y transporte rápidas, seguras y a tiempo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-dot-dark">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <a
                  href="mailto:ecarrete@dotlogistics.mx"
                  className="text-dot-text hover:text-primary transition-colors"
                >
                  ecarrete@dotlogistics.mx
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <a
                  href="tel:6141592833"
                  className="text-dot-text hover:text-primary transition-colors"
                >
                  614 159 2833
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-dot-text">
                  Calle García Salinas 5916
                  <br />
                  Col. Las Granjas, Chihuahua
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-dot-dark">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 border border-border hover:border-primary rounded-2xl transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-dot-text group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/dot.logistics.transport/#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary rounded-2xl transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-dot-text group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dot-text text-sm">
              © 2026 Dot Logistics & Transport. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-dot-text hover:text-primary transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-dot-text hover:text-primary transition-colors"
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
