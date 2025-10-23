import { Card } from "@/components/ui/card";
import { Flame, ShieldCheck, Droplets, Zap, Heart, TrendingDown } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Acelera o Metabolismo",
    description: "Ajuda seu corpo a queimar calorias de forma mais eficiente ao longo do dia."
  },
  {
    icon: TrendingDown,
    title: "Reduz o Apetite",
    description: "Controla a fome e diminui a vontade de comer entre as refeições."
  },
  {
    icon: Droplets,
    title: "Fórmula Líquida",
    description: "Absorção rápida e eficaz, melhor que cápsulas tradicionais."
  },
  {
    icon: Zap,
    title: "Mais Energia",
    description: "Aumenta sua disposição e energia para o dia a dia."
  },
  {
    icon: Heart,
    title: "Colágeno Tipo II",
    description: "Auxilia na manutenção das articulações enquanto emagrece."
  },
  {
    icon: ShieldCheck,
    title: "100% Natural",
    description: "Ingredientes naturais e seguros, sem contraindicações graves."
  }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como CCY GOTAS Vai Te Ajudar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios comprovados que fazem CCY GOTAS ser a escolha de milhares de pessoas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-card"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
