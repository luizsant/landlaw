import { Award, BookOpen, Briefcase, CheckCircle, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import certificado from "@/assets/certificado.jpg";

const Authority = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();
  const { ref: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation();
  const credentials = [
    {
      icon: Award,
      title: "Mestre Em Direito Pelo IDP/Brasília",
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
    },
    {
      icon: ShieldCheck,
      title: "Expert na Defesa do Executado",
      description: "Atuação reconhecida em estratégias para reduzir cobranças e proteger bens"
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

  // Carrossel de Certificações
  // Procura certificados adicionais: qualquer arquivo que comece com "certificado"
  const certModules = useMemo(() => (
    Object.assign(
      {},
      import.meta.glob("../assets/certificado*.{jpg,jpeg,png,webp}", { eager: true, as: "url" }),
      import.meta.glob("/src/assets/certificado*.{jpg,jpeg,png,webp}", { eager: true, as: "url" })
    )
  ), []);
  const otherCerts = useMemo(() => {
    const entries = Object.entries(certModules) as [string, string][]; // [path, url]
    // Remove o certificado principal e deduplica por URL
    const uniqueByUrl = new Map<string, string>();
    for (const [path, url] of entries) {
      if (url === certificado) continue;
      if (!uniqueByUrl.has(url)) uniqueByUrl.set(url, path);
    }
    // Ordena por path para estabilidade (ex.: certificado2 antes de certificado3)
    return Array.from(uniqueByUrl.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([url]) => url);
  }, [certModules]);
  const slides = useMemo(() => [certificado, ...otherCerts], [otherCerts]);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6 shadow-[var(--shadow-glow)]">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">Autoridade & Experiência</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Especialista em Defesa do Executado
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advocacia estratégica com foco exclusivo na proteção patrimonial de devedores em processos de execução, cobrança e monitória.
          </p>
        </div>

        {/* Credentials Cards */}
        <div ref={cardsRef} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 scroll-animate animation-delay-200 ${cardsVisible ? 'visible' : ''}`}>
          {credentials.map((cred, index) => (
            <Card key={index} className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-2 bg-card">
              <cred.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{cred.title}</h3>
              <p className="text-muted-foreground">{cred.description}</p>
            </Card>
          ))}
        </div>

        {/* Certificado - Carrossel Automático */}
        <div ref={certRef} className={`mb-16 scroll-animate animation-delay-250 ${certVisible ? 'visible' : ''}`}>
          <Card className="p-6 md:p-8 border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Certificação Especializada
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={slides[slideIndex]}
                  alt="Certificado de Especialização"
                  className="w-full h-auto transition-opacity duration-500"
                  onClick={() => window.open(slides[slideIndex], '_blank')}
                />
                {slides.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-background/60 backdrop-blur px-3 py-1.5 rounded-full border border-border">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Ir para slide ${i + 1}`}
                        onClick={() => setSlideIndex(i)}
                        className={`h-2.5 w-2.5 rounded-full transition-all ${i === slideIndex ? 'bg-accent' : 'bg-muted'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                {slideIndex === 0 ? 'Treinamento Avançado Expert na Defesa do Executado - AVA Brasil' : 'International Certification - Expert em Defesa do Executado'}
              </p>
            </div>
          </Card>
        </div>

        {/* Expertise List */}
        <div ref={expertiseRef} className={`bg-card p-8 md:p-12 rounded-2xl border-2 shadow-[var(--shadow-elegant)] scroll-animate animation-delay-300 ${expertiseVisible ? 'visible' : ''}`}>
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
