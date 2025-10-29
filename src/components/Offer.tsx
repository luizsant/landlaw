import { CheckCircle, Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Offer = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
  const { ref: urgencyRef, isVisible: urgencyVisible } = useScrollAnimation();
  const offerings = [
    "Atendimento inicial gratuito para avaliação do processo",
    "Análise detalhada de todos os documentos do seu caso",
    "Plano de defesa personalizado e sob medida",
    "Acompanhamento constante em todas as etapas",
    "Relatórios periódicos sobre o andamento",
    "Acesso direto ao advogado responsável"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-semibold">Oferta Exclusiva</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comece Agora com Avaliação Gratuita
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Sem compromisso. Sem custos iniciais. Apenas orientação profissional para proteger seu patrimônio.
          </p>
        </div>

        <Card ref={cardRef} className={`bg-white/10 backdrop-blur-sm border-2 border-white/20 p-8 md:p-12 scroll-animate animation-delay-200 ${cardVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-accent" />
                O que você recebe:
              </h3>
              <ul className="space-y-4">
                {offerings.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent/20">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-accent mb-2">100%</div>
                <p className="text-lg">Gratuito para avaliação inicial</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Avaliação do caso</span>
                    <span className="font-bold text-accent">✓</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Análise de documentos</span>
                    <span className="font-bold text-accent">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Estratégia preliminar</span>
                    <span className="font-bold text-accent">✓</span>
                  </div>
                </div>

                <p className="text-sm text-white/70 text-center italic">
                  Só avançamos com sua autorização expressa
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent text-primary hover:bg-accent/90 font-bold text-xl px-12 py-7 shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/5591993836796', '_blank')}
            >
              Solicitar Avaliação Gratuita Agora
            </Button>
            <p className="mt-4 text-sm text-white/70">
              Resposta em até 24 horas • Atendimento humanizado
            </p>
          </div>
        </Card>

        {/* Urgency banner */}
        <div ref={urgencyRef} className={`mt-10 bg-destructive/20 border-2 border-destructive/30 rounded-xl p-6 text-center scroll-animate animation-delay-300 ${urgencyVisible ? 'visible' : ''}`}>
          <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
          <p className="text-lg font-semibold">
            Vagas limitadas para novos casos este mês
          </p>
          <p className="text-white/80 text-sm mt-2">
            Garanta sua avaliação gratuita antes que as vagas se esgotem
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
