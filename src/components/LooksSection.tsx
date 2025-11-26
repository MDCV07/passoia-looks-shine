import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import labiosImg from "@/assets/labios.png";
import olhosImg from "@/assets/olhos.png";
import rostoImg from "@/assets/rosto.png";
import tendenciaImg from "@/assets/tendencia.png";

interface Look {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
}

const looks: Look[] = [
  {
    id: 1,
    image: labiosImg,
    title: "Lábios Perfeitos",
    description: "Descubra as melhores técnicas para realçar seus lábios com batons de longa duração e acabamento impecável.",
    price: "R$ 89,90",
  },
  {
    id: 2,
    image: olhosImg,
    title: "Olhos Marcantes",
    description: "Aprenda a criar looks incríveis com sombras, delineadores e máscaras que valorizam o seu olhar.",
    price: "R$ 129,90",
  },
  {
    id: 3,
    image: rostoImg,
    title: "Pele Radiante",
    description: "Base, contorno e iluminador para uma pele perfeita e luminosa durante todo o dia.",
    price: "R$ 149,90",
  },
  {
    id: 4,
    image: tendenciaImg,
    title: "Tendências 2024",
    description: "Conheça as últimas tendências em maquiagem e fique por dentro do que há de mais moderno.",
    price: "R$ 199,90",
  },
];

const LooksSection = () => {
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);

  return (
    <section id="looks" className="py-16 px-4 lg:px-8 bg-gradient-to-b from-background to-rose-light/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {looks.map((look) => (
            <div
              key={look.id}
              onClick={() => setSelectedLook(look)}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-lg">Ver Detalhes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedLook} onOpenChange={() => setSelectedLook(null)}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="text-2xl font-bold text-foreground mb-4">
            {selectedLook?.title}
          </DialogTitle>
          {selectedLook && (
            <div className="space-y-4">
              <img
                src={selectedLook.image}
                alt={selectedLook.title}
                className="w-full rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                {selectedLook.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Preço sugerido:</span>
                <span className="text-2xl font-bold text-primary">
                  {selectedLook.price}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LooksSection;
