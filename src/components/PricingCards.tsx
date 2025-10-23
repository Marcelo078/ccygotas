import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, TruckIcon, Star, Shield } from "lucide-react";
import kit12 from "@/assets/kit-12-meses.png";
import kit5 from "@/assets/kit-5-meses.png";
import kit3 from "@/assets/kit-3-meses.png";
import kit1 from "@/assets/kit-1-mes.png";

const pricingOptions = [
  {
    id: 1,
    name: "Kit 12 Meses",
    subtitle: "O MAIS VENDIDO!",
    promo: "PAGUE 6 E LEVE 12",
    discount: "60% de desconto",
    image: kit12,
    installments: "12x DE",
    price: "69,98",
    fullPrice: "R$ 697,00",
    shipping: "FRETE GRÁTIS",
    badge: "Melhor Custo-Benefício",
    highlight: true
  },
  {
    id: 2,
    name: "Kit 5 Meses",
    subtitle: "PAGUE 3 E LEVE 5!",
    promo: "",
    discount: "50% de desconto",
    image: kit5,
    installments: "12x DE",
    price: "39,86",
    fullPrice: "R$ 397,00",
    shipping: "FRETE GRÁTIS",
    badge: "Ótima Escolha"
  },
  {
    id: 3,
    name: "Kit 3 Meses",
    subtitle: "PAGUE 2 E LEVE 3!",
    promo: "",
    discount: "40% de desconto",
    image: kit3,
    installments: "12x DE",
    price: "29,82",
    fullPrice: "R$ 297,00",
    shipping: "FRETE GRÁTIS",
    badge: "Recomendado"
  },
  {
    id: 4,
    name: "Kit 1 Mês",
    subtitle: "PARA EXPERIMENTAR!",
    promo: "",
    discount: "5% de desconto",
    image: kit1,
    installments: "12x DE",
    price: "19,78",
    fullPrice: "R$ 197,00",
    shipping: "FRETE 29,90"
  }
];

export const PricingCards = () => {
  return (
    <section id="precos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Últimas Ofertas Disponíveis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o Melhor Kit Para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quanto maior o kit, maior a economia. Aproveite os descontos especiais!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingOptions.map((option) => (
            <Card 
              key={option.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                option.highlight 
                  ? 'border-2 border-accent shadow-xl scale-105' 
                  : 'border-2 hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              {option.badge && (
                <div className="absolute top-4 -right-10 rotate-45 bg-gradient-to-r from-accent to-accent/80 text-white text-xs font-bold py-1 px-12 shadow-lg">
                  {option.badge}
                </div>
              )}
              
              <div className={`p-6 text-center ${option.highlight ? 'bg-gradient-to-br from-accent/5 to-accent/10' : ''}`}>
                <Badge className={`mb-3 ${option.highlight ? 'bg-accent text-white' : 'bg-primary/10 text-primary'}`}>
                  {option.discount}
                </Badge>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{option.name}</h3>
                <p className="text-sm font-semibold text-accent mb-4">{option.subtitle}</p>
                
                <img 
                  src={option.image} 
                  alt={`${option.name} - CCY Gotas`}
                  className="w-full h-48 object-contain mb-4"
                />
                
                {option.promo && (
                  <p className="text-lg font-bold text-primary mb-2">{option.promo}</p>
                )}
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">{option.installments}</p>
                  <p className="text-4xl font-bold text-accent mb-1">
                    {option.price}
                  </p>
                  <p className="text-sm text-muted-foreground line-through">{option.fullPrice}</p>
                </div>
                
                <Button 
                  className={`w-full text-lg py-6 shadow-lg transition-all duration-300 ${
                    option.highlight
                      ? 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white'
                      : 'bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground'
                  }`}
                  asChild
                >
                  <a href="https://app.monetizze.com.br/r/AJB21485231" target="_blank" rel="noopener noreferrer">
                    COMPRAR AGORA
                  </a>
                </Button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                  <TruckIcon className="w-4 h-4 text-secondary" />
                  <span className={option.shipping.includes("GRÁTIS") ? "text-secondary font-semibold" : "text-muted-foreground"}>
                    {option.shipping}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Garantia de 30 Dias</h3>
            <p className="text-muted-foreground">
              Compre com total segurança. Se não gostar, devolvemos seu dinheiro.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-secondary" />
              <p className="text-sm font-medium">Pagamento Seguro</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-secondary" />
              <p className="text-sm font-medium">Dados Protegidos</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-secondary" />
              <p className="text-sm font-medium">Entrega Garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
