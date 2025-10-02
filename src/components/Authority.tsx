import { Award, BookOpen, Briefcase, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Authority = () => {
  const credentials = [
    {
      icon: Award,
      title: "Mestre em Direito",
      description: "Especialização acadêmica em defesa executória"
    },
    {
      icon: Briefcase,
      title: "Experiência Prática",
      description: "Mais de 10 anos atuando em execuções cíveis"
    },
    {
      icon: BookOpen,
      title: "Atualização Constante",
      description: "Jurisprudência e novas teses defensivas"
    }
  ];

  const expertise = [
    "Suspensão de penhoras e bloqueios judiciais",
    "Contestação de juros abusivos e anatocismo",
    "Análise de prescrição e decadência",
    "Identificação de nulidades processuais",
    "Estratégias de negociação vantajosa",
    "Redução significativa de valores cobrados"
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">Autoridade & Experiência</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Especialista em Defesa do Executado
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advocacia estratégica com foco exclusivo na proteção patrimonial de devedores em processos de execução, cobrança e monitória.
          </p>
        </div>

        {/* Credentials Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-fade-in-up animation-delay-200">
          {credentials.map((cred, index) => (
            <Card key={index} className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-2">
              <cred.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{cred.title}</h3>
              <p className="text-muted-foreground">{cred.description}</p>
            </Card>
          ))}
        </div>

        {/* Expertise List */}
        <div className="bg-card p-8 md:p-12 rounded-2xl border-2 shadow-[var(--shadow-elegant)] animate-fade-in-up animation-delay-300">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Áreas de Atuação Especializada
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-border text-center">
            <p className="text-lg text-muted-foreground italic">
              "Atuação com foco em <strong className="text-accent font-semibold">reduzir valores cobrados</strong>, 
              alegar <strong className="text-accent font-semibold">nulidades</strong> e buscar 
              <strong className="text-accent font-semibold"> acordos estratégicos vantajosos</strong>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
