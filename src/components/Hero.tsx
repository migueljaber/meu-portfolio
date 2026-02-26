import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import backgroundImage from "@/assets/background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Desenvolvedor Full-Stack
          </p>
        </div>

        <h1
          className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Olá, eu sou </span>
          <span className="text-gradient glow-text">Miguel Jaber</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Desenvolvedor versátil, capacitado para projetos front-end, back-end e
          full-stack. Transformando ideias em código limpo e funcional.
        </p>

        <div
          className="flex items-center justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://github.com/migueljaber"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full card-hover hover:bg-primary/20"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/migueljaber"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full card-hover hover:bg-primary/20"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=migueljabermacedo@gmail.com"
            className="p-3 glass rounded-full card-hover hover:bg-primary/20"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Button size="lg" className="glow-box px-8">
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            <a href="#contato">Entrar em Contato</a>
          </Button>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
