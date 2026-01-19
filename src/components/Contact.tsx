import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hola, mi nombre es ${formData.name}. ${formData.message}. Email: ${formData.email}. Teléfono: ${formData.phone || "No proporcionado"}`;
    const whatsappUrl = `https://wa.me/526141592833?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Contáctanos
          </p>
          <h2 className="mb-6">¿Listo para Empezar?</h2>
          <p className="text-lg text-dot-text max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo te responderá en minutos por medio de WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start gap-5 group">
              <div className="p-3 border border-dot-dark rounded-2xl flex-shrink-0 group-hover:border-primary transition-colors">
                <Mail className="h-6 w-6 text-dot-dark group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-dot-dark">Email</h3>
                <a
                  href="mailto:ecarrete@dotlogistics.mx"
                  className="text-dot-text hover:text-primary transition-colors"
                >
                  ecarrete@dotlogistics.mx
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-3 border border-dot-dark rounded-2xl flex-shrink-0 group-hover:border-primary transition-colors">
                <Phone className="h-6 w-6 text-dot-dark group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-dot-dark">
                  Teléfono / WhatsApp
                </h3>
                <a
                  href="tel:6141592833"
                  className="text-dot-text hover:text-primary transition-colors"
                >
                  614 159 2833
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-3 border border-dot-dark rounded-2xl flex-shrink-0 group-hover:border-primary transition-colors">
                <MapPin className="h-6 w-6 text-dot-dark group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-dot-dark">Dirección</h3>
                <p className="text-dot-text">
                  Calle García Salinas 5916
                  <br />
                  Col. Las Granjas, Chihuahua
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-[40px] border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-dot-dark"
                >
                  Nombre *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-xl border-border focus:border-primary focus:ring-primary"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-dot-dark"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-xl border-border focus:border-primary focus:ring-primary"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2 text-dot-dark"
                >
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="rounded-xl border-border focus:border-primary focus:ring-primary"
                  placeholder="614 123 4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-dot-dark"
                >
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-xl border-border focus:border-primary focus:ring-primary min-h-32"
                  placeholder="Cuéntanos sobre tus necesidades logísticas..."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-lg py-6"
              >
                Solicita tu cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
