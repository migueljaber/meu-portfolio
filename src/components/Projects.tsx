import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import project from "@/assets/image.png";

const projects = [
  {
    title: "Sistema de Agendamento para Barbearia",
    description: "API RESTful para gerenciamento de clientes, barbeiros, serviços e agendamentos de uma barbearia.",
    tags: ["Java", "Spring Boot", "API", "PostgreSQL", "exception handling", "swagger"],
    github: "https://github.com/migueljaber/barbearia-apirest",
    type: "Em desenvolvimento",
    image: project
  },
  {
    title: "Sistema de Cadastro de Produtos e Categorias",
    description: "API RESTful para cadastro de produtos e categorias.",
    tags: ["Java", "Spring Boot", "API", "h2 database", "exception handling", "swagger"],
    github: "https://github.com/migueljaber/crud-api-restful",
    type: "Pessoal",
    image: project
  },


];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-medium">
                  {project.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/migueljaber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Ver mais no GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
