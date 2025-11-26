import heroBanner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      <img
        src={heroBanner}
        alt="Banner principal"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
    </section>
  );
};

export default Hero;
