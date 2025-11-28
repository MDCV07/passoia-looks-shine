import { useState } from "react";
import abertoImg from "@/assets/aberto.png";
import fechadoImg from "@/assets/fechado.png";
import batomImg from "@/assets/batom.png";
import cinzaBocaImg from "@/assets/cinza-boca.png";
import vermelhoBocaImg from "@/assets/vermelho-boca.png";
import bordoBocaImg from "@/assets/bordo-boca.png";
import nudeBocaImg from "@/assets/nude-boca.png";
import cinzaColorImg from "@/assets/cinza-color.png";
import vermelhoColorImg from "@/assets/vermelho-color.png";
import bordoColorImg from "@/assets/bordo-color.png";
import nudeColorImg from "@/assets/nude-color.png";
import estrelasImg from "@/assets/estrelas.png";

interface Color {
  id: string;
  name: string;
  colorImage: string;
  lipImage: string;
}

const colors: Color[] = [
  {
    id: "cinza",
    name: "Cinza Taupe",
    colorImage: cinzaColorImg,
    lipImage: cinzaBocaImg,
  },
  {
    id: "vermelho",
    name: "Vermelho Clássico",
    colorImage: vermelhoColorImg,
    lipImage: vermelhoBocaImg,
  },
  {
    id: "bordo",
    name: "Bordô Intenso",
    colorImage: bordoColorImg,
    lipImage: bordoBocaImg,
  },
  {
    id: "nude",
    name: "Nude Natural",
    colorImage: nudeColorImg,
    lipImage: nudeBocaImg,
  },
];

const LaunchSection = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);

  return (
    <section id="lancamentos" className="py-16 px-4 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Coluna 1 - Main Image + Product Images */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {/* Product Images - Smaller */}
            <div className="hidden md:flex flex-col gap-3 w-24 shrink-0">
              <img
                src={abertoImg}
                alt="Batom aberto"
                className="w-full rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              />
              <img
                src={fechadoImg}
                alt="Batom fechado"
                className="w-full rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              />
              <img
                src={batomImg}
                alt="Batom detalhe"
                className="w-full rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              />
            </div>
            
            {/* Main Image - Larger and more prominent */}
            <div className="flex-1">
              <div className="relative rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={selectedColor.lipImage}
                  alt={`Lábios com ${selectedColor.name}`}
                  className="w-full aspect-square object-cover transition-opacity duration-500"
                  key={selectedColor.id}
                />
              </div>
            </div>
          </div>

          {/* Coluna 3 - Product Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* Rating */}
            <div className="h-8">
              <img src={estrelasImg} alt="5 estrelas" className="h-full w-auto" />
            </div>

            {/* Product Name */}
            <h3 className="text-2xl font-bold text-foreground">Matte Premium</h3>

            {/* Color Selection */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Cores disponíveis
              </h4>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                      selectedColor.id === color.id
                        ? "border-primary ring-2 ring-primary ring-offset-2"
                        : "border-border"
                    }`}
                    title={color.name}
                  >
                    <img
                      src={color.colorImage}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{selectedColor.name}</p>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Descrição
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de
                cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte
                aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra
                ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos
                lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
