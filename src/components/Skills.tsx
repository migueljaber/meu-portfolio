
import javaIcon from "@/assets/icons/java.svg";
import springbootIcon from "@/assets/icons/springboot.svg";
import dockerIcon from "@/assets/icons/docker.svg";
import mongoDBIcon from "@/assets/icons/mongodb.svg";
import postgresqlIcon from "@/assets/icons/postgresql.svg";

import mysqlIcon from "@/assets/icons/mysql.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import reactIcon from "@/assets/icons/react.svg";
import tailwindcssIcon from "@/assets/icons/tailwindcss.svg";



import gitIcon from "@/assets/icons/git.svg";


import figmaIcon from "@/assets/icons/figma.svg";
import dbeaverIcon from "@/assets/icons/dbeaver.svg";

import jiraIcon from "@/assets/icons/jira.svg";
import insomniaIcon from "@/assets/icons/insomnia.svg";
import confluenceIcon from "@/assets/icons/confluence.svg";
import bitbucketIcon from "@/assets/icons/bitbucket.svg";
import postmanIcon from "@/assets/icons/postman.svg";


import trelloIcon from "@/assets/icons/trello.svg";

import swaggerIcon from "@/assets/icons/swagger.svg";
import hibernateIcon from "@/assets/icons/hibernate.svg";

import linuxIcon from "@/assets/icons/linux.svg";

const technologies = [
  { name: "Java", icon: javaIcon },
  { name: "Spring Boot", icon: springbootIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "MongoDB", icon: mongoDBIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },

  { name: "MySQL", icon: mysqlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Tailwind CSS", icon: tailwindcssIcon },
  
];

const tools = [
  
  { name: "Figma", icon: figmaIcon },
  { name: "Hibernate", icon: hibernateIcon },
  { name: "Dbeaver", icon: dbeaverIcon},

  { name: "Swagger", icon: swaggerIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "Insomnia", icon: insomniaIcon },
  { name: "Trello", icon: trelloIcon },
  { name: "Bitbucket", icon: bitbucketIcon },
  { name: "Jira", icon: jiraIcon },
  { name: "Confluence", icon: confluenceIcon },
  
  
  
  
  
  { name: "Git", icon: gitIcon },
  { name: "Linux", icon: linuxIcon },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Habilidades</span> & Tecnologias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no dia a dia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="glass rounded-xl p-4 flex flex-col items-center gap-3 card-hover group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors p-2">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-display font-semibold mb-6">
                Ferramentas & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default flex items-center gap-2"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-4 h-4 object-contain"
                    />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-display font-semibold mb-4">
                Diferenciais
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Desenvolvimento de APIs RESTful e integração com sistemas
                  externos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Escrita de código limpo, organizado e de fácil manutenção
                  (Clean Code)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Vivência com metodologias ágeis e organização de tarefas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Experiência prática com CRUD e estruturação de sistemas
                  full-stack
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Aplicação de boas práticas de programação orientada a objetos
                  (encapsulamento)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
