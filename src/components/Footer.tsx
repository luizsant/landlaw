import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div ref={footerRef} className={`grid md:grid-cols-4 gap-8 mb-8 scroll-animate ${footerVisible ? 'visible' : ''}`}>
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="LS Advocacia e Consultoria" className="h-16 md:h-20" />
            </div>
            <p className="text-white/80 mb-4">
              Defesa técnica e estratégica em processos de execução, cobrança e monitória.
            </p>
            
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(91) 99383-6796</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>luizsantiago@luizsantiago.adv.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Belém/PA</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Execuções Cíveis</li>
              <li>Ações de Cobrança</li>
              <li>Ações Monitórias</li>
              <li>Defesa Patrimonial</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Advocacia Especializada. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs">
            Este site não substitui consulta jurídica formal. Cada caso deve ser analisado individualmente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
