import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar! Estou disponível para oportunidades e projetos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <a
                      href="mailto:migueljabermacedo@gmail.com"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      migueljabermacedo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <a
                      href="tel:+5521982957001"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      (21) 98295-7001
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium">Realengo, Rio de Janeiro - RJ</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/migueljaber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-3 card-hover hover:bg-primary/10"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/migueljaber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-3 card-hover hover:bg-primary/10"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 glow-box">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Vamos trabalhar juntos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estou aberto a oportunidades de estágio, freelance ou emprego
                CLT. Ficarei feliz em contribuir com seu projeto!
              </p>
              <Button size="lg" className="glow-box" asChild>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=migueljabermacedo@gmail.com"
                  target="_blank"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar via Gmail
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
