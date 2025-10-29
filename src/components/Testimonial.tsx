import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import provaSocial1 from "@/assets/prova_social/Prova-Social-1.webp";
import provaSocial2 from "@/assets/prova_social/Prova-Social-2.webp";
import provaSocial3 from "@/assets/prova_social/Prova-Social-3.webp";
import provaSocial4 from "@/assets/prova_social/Prova-Social-4.webp";

const Testimonial = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  const provaSocialImages = [
    provaSocial1,
    provaSocial2,
    provaSocial3,
    provaSocial4,
  ];

  return (
    <section className="py-12 px-4 bg-primary/5">
      <div className="container mx-auto max-w-5xl">
        <div ref={headerRef} className={`text-center mb-8 scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Depoimento</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Depoimentos de Clientes
          </h2>
        </div>

        <div ref={cardRef} className={`scroll-animate animation-delay-200 ${cardVisible ? 'visible' : ''}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {provaSocialImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="p-2">
                    <Card className="border-2 shadow-[var(--shadow-elegant)] overflow-hidden">
                      <div className="flex items-center justify-center p-4">
                        <img
                          src={image}
                          alt={`Depoimento de cliente ${index + 1}`}
                          className="max-w-full h-auto object-contain"
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
