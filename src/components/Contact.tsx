import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import loadingImage from "@/assets/loading.jpg";

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
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    // Crear mensaje para WhatsApp
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Contacto</h2>
          <p className="text-lg text-dot-text max-w-2xl mx-auto">
            ¿Requieres una cotización o más información? Nuestro equipo te
            responderá en minutos por medio de Whatsapp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                src={loadingImage}
                alt="Operaciones logísticas"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
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

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-dot-dark">
                    Teléfono / WhatsApp
                  </h3>
                  <a
                    href="tel:6141592833"
                    className="text-dot-text hover:text-accent transition-colors"
                  >
                    614 159 2833
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-dot-dark">
                    Dirección
                  </h3>
                  <p className="text-dot-text">
                    Calle García Salinas 5916
                    <br />
                    Col. Las Granjas, Chihuahua
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-card p-8 rounded-2xl shadow-lg">
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
                  className="rounded-lg"
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
                  className="rounded-lg"
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
                  className="rounded-lg"
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
                  className="rounded-lg min-h-32"
                  placeholder="Cuéntanos sobre tus necesidades logísticas..."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] hover:scale-105 transition-transform"
              >
                Solicita tu cotización
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
