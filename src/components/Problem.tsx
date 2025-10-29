import { AlertCircle, TrendingDown, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Problem = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div ref={leftRef} className={`space-y-6 scroll-animate ${leftVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card p-8 rounded-2xl border-2 border-destructive/20 shadow-[var(--shadow-elegant)]">
                <AlertCircle className="h-16 w-16 text-destructive mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Você está enfrentando:</h3>
                <ul className="space-y-4">
                  {[
                    "Execuções judiciais abusivas",
                    "Cobranças com juros ilegais",
                    "Penhoras injustas de bens",
                    "Bloqueios bancários inesperados",
                    "Valores prescritos sendo cobrados"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <TrendingDown className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={rightRef} className={`space-y-6 scroll-animate animation-delay-200 ${rightVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-semibold">O Problema</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Milhares de pessoas sofrem com processos injustos
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Execuções judiciais, cobranças abusivas e monitorias frequentemente incluem <strong className="text-foreground">juros ilegais</strong>, <strong className="text-foreground">cobranças prescritas</strong> ou <strong className="text-foreground">penhoras injustas</strong>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                O devedor nem sempre é o culpado — mas <strong className="text-accent">precisa de defesa técnica especializada</strong> para equilibrar a disputa e proteger seu patrimônio.
              </p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-foreground font-semibold text-lg italic">
                "Cada dia sem defesa adequada aumenta os riscos de perda patrimonial irreversível."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
