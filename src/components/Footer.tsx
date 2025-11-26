import mastercardImg from "@/assets/mastercard.png";
import visaImg from "@/assets/visa.png";
import pixImg from "@/assets/pix.png";
import boletoImg from "@/assets/boleto.png";
import instagramImg from "@/assets/instagram.png";
import facebookImg from "@/assets/facebook.png";
import youtubeImg from "@/assets/youtube.png";
import linkedinImg from "@/assets/linkedin.png";

const Footer = () => {
  const atendimentoLinks = [
    "Fale Conosco",
    "Perguntas frequentes",
    "Meus Pedidos",
    "Nossas Lojas",
  ];

  return (
    <footer className="bg-foreground text-background py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Coluna 1 - Atendimentos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-accent">Atendimentos</h3>
            <ul className="space-y-2">
              {atendimentoLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/80 hover:text-gold-accent transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2 - Formas de pagamento */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-accent">Formas de pagamento</h3>
            <div className="flex flex-wrap gap-3">
              <div className="bg-background rounded p-2 flex items-center justify-center w-16 h-10">
                <img src={mastercardImg} alt="Mastercard" className="w-full h-full object-contain" />
              </div>
              <div className="bg-background rounded p-2 flex items-center justify-center w-16 h-10">
                <img src={visaImg} alt="Visa" className="w-full h-full object-contain" />
              </div>
              <div className="bg-background rounded p-2 flex items-center justify-center w-16 h-10">
                <img src={pixImg} alt="PIX" className="w-full h-full object-contain" />
              </div>
              <div className="bg-background rounded p-2 flex items-center justify-center w-16 h-10">
                <img src={boletoImg} alt="Boleto" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Coluna 3 - Redes sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-accent">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-300"
                aria-label="Instagram"
              >
                <img src={instagramImg} alt="Instagram" className="w-full h-full object-cover" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-300"
                aria-label="Facebook"
              >
                <img src={facebookImg} alt="Facebook" className="w-full h-full object-cover" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-300"
                aria-label="YouTube"
              >
                <img src={youtubeImg} alt="YouTube" className="w-full h-full object-cover" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-300"
                aria-label="LinkedIn"
              >
                <img src={linkedinImg} alt="LinkedIn" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Passoia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
