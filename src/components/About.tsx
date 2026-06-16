import { GraduationCap, Briefcase, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e formação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Experiência</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-primary font-medium">2026</p>
                <h4 className="font-semibold">Estagiário - Bradesco Seguros</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Manutenção de sistemas Java/Spring, 
                  participação em célula ágil com Scrum e apoio no desenvolvimento de microserviços para soluções internas da área de Reembolso Saúde.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-primary font-medium">2024</p>
                <h4 className="font-semibold">Estagiário - Rio Option</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Atendimento e suporte ao cliente, instalação de softwares, 
                  manutenção, utilização do Pacote Office e criação de imagens.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Formação</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-primary font-medium">2025 - 2027</p>
                <h4 className="font-semibold">Análise e Desenvolvimento de Sistemas</h4>
                <p className="text-sm text-muted-foreground mt-1">FAETERJ-Rio</p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-primary font-medium">2026</p>
                <h4 className="font-semibold">Curso Programador Back-end</h4>
                <p className="text-sm text-muted-foreground mt-1">Firjan SENAI</p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-primary font-medium">2024</p>
                <h4 className="font-semibold">Técnico em Informática</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Colégio Realengo - Ensino Médio Profissionalizante
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 card-hover md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Idiomas</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Inglês</span>
                    <span className="text-primary text-sm">Intermediário</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Espanhol</span>
                    <span className="text-primary text-sm">Básico</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
