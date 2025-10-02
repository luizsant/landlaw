import { Shield, TrendingDown, FileText, Handshake, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Suspensão de Penhoras e Bloqueios",
      description: "Medidas urgentes para liberar seus bens e contas bancárias bloqueadas judicialmente.",
      color: "text-blue-600"
    },
    {
      icon: TrendingDown,
      title: "Contestação de Juros Abusivos",
      description: "Análise técnica para identificar e contestar cobranças indevidas, juros capitalizados e valores ilegais.",
      color: "text-green-600"
    },
    {
      icon: FileText,
      title: "Teses de Prescrição e Nulidades",
      description: "Aplicação de teses jurídicas sólidas para anular cobranças prescritas e vícios processuais.",
      color: "text-purple-600"
    },
    {
      icon: Handshake,
      title: "Negociação Estratégica",
      description: "Acordos inteligentes para diminuir drasticamente o valor da dívida com condições favoráveis.",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-semibold">Benefícios</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como podemos proteger você
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estratégias jurídicas comprovadas para defender seu patrimônio e reduzir o impacto financeiro dos processos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Results Highlight */}
        <div className="mt-16 bg-gradient-to-br from-accent/10 to-accent/5 p-8 md:p-12 rounded-2xl border-2 border-accent/20 animate-fade-in-up">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">70%</div>
              <p className="text-foreground font-medium">Redução média de valores</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">85%</div>
              <p className="text-foreground font-medium">Penhoras suspensas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">92%</div>
              <p className="text-foreground font-medium">Clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
