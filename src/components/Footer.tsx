import { CreditCard, DollarSign, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

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
              <div className="bg-background rounded p-2 flex items-center justify-center w-12 h-8">
                <CreditCard className="w-6 h-6 text-foreground" />
              </div>
              <div className="bg-background rounded p-2 flex items-center justify-center w-12 h-8">
                <CreditCard className="w-6 h-6 text-foreground" />
              </div>
              <div className="bg-background rounded p-2 flex items-center justify-center w-12 h-8">
                <DollarSign className="w-6 h-6 text-foreground" />
              </div>
              <div className="bg-background rounded p-2 flex items-center justify-center w-12 h-8">
                <span className="text-xs font-bold text-foreground">PIX</span>
              </div>
            </div>
          </div>

          {/* Coluna 3 - Redes sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-accent">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-background rounded-full p-2 hover:bg-gold-accent transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-foreground group-hover:text-background" />
              </a>
              <a
                href="#"
                className="bg-background rounded-full p-2 hover:bg-gold-accent transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-foreground group-hover:text-background" />
              </a>
              <a
                href="#"
                className="bg-background rounded-full p-2 hover:bg-gold-accent transition-colors duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-foreground group-hover:text-background" />
              </a>
              <a
                href="#"
                className="bg-background rounded-full p-2 hover:bg-gold-accent transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-background" />
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
