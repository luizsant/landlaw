import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, AlertCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-destructive/10 via-background to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-6 py-3 rounded-full border-2 border-destructive/30">
            <AlertCircle className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">Atenção: Tempo é Crucial</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Não espere: cada dia sem defesa aumenta os riscos
          </h2>

          {/* Risk Indicators */}
          <div className="grid md:grid-cols-3 gap-4 py-6">
            {[
              { icon: Clock, text: "Bloqueio de contas" },
              { icon: Shield, text: "Penhora de bens" },
              { icon: AlertCircle, text: "Perda patrimonial" }
            ].map((risk, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border-2 border-destructive/20">
                <risk.icon className="h-8 w-8 text-destructive mx-auto mb-3" />
                <p className="text-foreground font-semibold">{risk.text}</p>
              </div>
            ))}
          </div>

          {/* Urgent Message */}
          <div className="bg-primary/5 border-l-4 border-accent p-8 rounded-r-xl text-left max-w-2xl mx-auto">
            <p className="text-xl text-foreground leading-relaxed">
              Cada dia sem uma <strong className="text-accent">defesa técnica adequada</strong> permite que:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Juros continuem acumulando de forma exponencial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Novos bloqueios e penhoras sejam realizados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Prazos processuais cruciais sejam perdidos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Sua situação financeira se agrave irreversivelmente</span>
              </li>
            </ul>
          </div>

          {/* Strong CTA */}
          <div className="pt-8 space-y-6">
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-accent text-primary hover:bg-accent/90 font-bold text-2xl px-16 py-8 shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 w-full md:w-auto"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Proteja seus direitos AGORA
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <p className="text-muted-foreground text-sm">
                Atendimento imediato via WhatsApp • Avaliação gratuita
              </p>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Resposta em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-accent" />
                <span>Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
