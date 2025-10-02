import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="LS Advocacia e Consultoria" className="h-16 md:h-20" />
            </div>
            <p className="text-white/80 mb-4">
              Defesa técnica e estratégica em processos de execução, cobrança e monitória.
            </p>
            <p className="text-sm text-white/60">
              OAB/SP XXX.XXX - Mestre em Direito
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>contato@exemplo.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>São Paulo - SP</span>
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
