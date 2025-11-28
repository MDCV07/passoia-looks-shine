import tendenciaColorImg from "@/assets/tendencia-color.png";

const NewsSection = () => {
  return (
    <section id="novidades" className="py-16 px-4 lg:px-8 bg-gradient-to-b from-background to-rose-light/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          NOVIDADES PARA VOCÊ
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-elegant h-[30vh]">
            <img
              src={tendenciaColorImg}
              alt="Novidades em maquiagem"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
