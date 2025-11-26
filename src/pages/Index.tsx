import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LooksSection from "@/components/LooksSection";
import LaunchSection from "@/components/LaunchSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LooksSection />
        <LaunchSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
