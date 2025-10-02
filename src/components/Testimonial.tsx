import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">Depoimento</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Resultados Reais de Clientes
          </h2>
        </div>

        <Card className="p-8 md:p-12 border-2 shadow-[var(--shadow-elegant)] animate-fade-in-up animation-delay-200">
          <Quote className="h-12 w-12 text-accent/30 mb-6" />
          
          <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
            "Graças à defesa técnica e estratégica, conseguimos reduzir a dívida em mais de 40% e desbloquear nossas contas bancárias em tempo recorde. A tranquilidade voltou para nossa família."
          </blockquote>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-accent">M.S.</span>
            </div>
            <div>
              <div className="font-bold text-foreground text-lg">Maria S.</div>
              <div className="text-muted-foreground">Empresária - São Paulo</div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up animation-delay-300">
          {[
            { value: "500+", label: "Casos bem-sucedidos" },
            { value: "R$ 50M+", label: "Economizados p/ clientes" },
            { value: "95%", label: "Taxa de aprovação" },
            { value: "4.9/5", label: "Avaliação média" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
