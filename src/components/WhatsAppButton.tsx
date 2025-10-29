import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 group"
      onClick={() => window.open('https://wa.me/5591993836796?text=Olá! Preciso de ajuda com um processo de execução.', '_blank')}
      >
        <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="sr-only">Falar no WhatsApp</span>
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
    </div>
  );
};

export default WhatsAppButton;
