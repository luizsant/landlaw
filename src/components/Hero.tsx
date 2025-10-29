import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";
import advogadoPhoto from "@/assets/advogado.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-3 animate-fade-in">
              <img src={logo} alt="LS Advocacia e Consultoria" className="h-16 md:h-20" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Defenda seu patrimônio e seus direitos em processos de execução
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Atuação especializada na defesa de devedores, com estratégias jurídicas eficazes para reduzir dívidas, suspender penhoras e negociar valores justos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent text-primary hover:bg-accent/90 font-semibold text-lg px-8 py-6 shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/5591993836796', '_blank')}
              >
                Fale agora com o advogado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary border-2 border-white hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6 transition-all duration-300 shadow"
              >
                Avaliação gratuita
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-accent">+10</div>
                <div className="text-sm text-white/80">Anos de experiência</div>
              </div>
              <div className="relative">
                <a 
                  href="https://www.escavador.com/nomes/luiz-antonio-santiago-correa-11f8570d16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-block cursor-pointer transition-all duration-300 hover:scale-105"
                  title="Clique para verificar no Escavador"
                >
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 bg-accent/20 rounded-full p-1 group-hover:bg-accent/30 transition-colors">
                      <ExternalLink className="h-3 w-3 text-accent" />
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-3xl font-bold text-accent group-hover:text-accent/90 transition-colors animate-pulse">+1000</div>
                      <CheckCircle2 className="h-4 w-4 text-accent/80 group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-sm text-white/90 group-hover:text-white transition-colors font-medium">Processos</div>
                      <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors italic">(verificar)</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/40 group-hover:bg-accent transition-colors"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl"></div>
              
              {/* Photo */}
              <div className="relative h-full rounded-2xl border-2 border-accent/30 overflow-hidden shadow-[var(--shadow-elegant)]">
                <img 
                  src={advogadoPhoto} 
                  alt="Advogado Especialista" 
                  className="w-full h-full object-cover"
                />
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
