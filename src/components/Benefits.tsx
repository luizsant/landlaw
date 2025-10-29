import { Shield, TrendingDown, FileText, Handshake, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Benefits = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
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
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}>
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

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-2 group scroll-animate ${cardsVisible ? 'visible' : ''} ${index === 1 ? 'animation-delay-100' : index === 2 ? 'animation-delay-200' : index === 3 ? 'animation-delay-300' : ''}`}
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
      </div>
    </section>
  );
};

export default Benefits;
