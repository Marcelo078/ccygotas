import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, TruckIcon } from "lucide-react";
import heroImage from "@/assets/ccy-gotas-hero.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <Badge className="inline-flex bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
              Produto Original • Fórmula Premium
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Garanta Seu Peso Ideal com{" "}
              <span className="text-primary">CCY GOTAS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              O suplemento líquido que acelera seu metabolismo e controla o apetite de forma natural. 
              <strong className="text-foreground"> Fórmula Premium com Colágeno Tipo II</strong> 
              {" "}para resultados visíveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AJB21485231" target="_blank" rel="noopener noreferrer">
                  👉 Ver Ofertas Exclusivas
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
                asChild
              >
                <a href="#beneficios">
                  Conhecer Benefícios
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <p className="text-sm font-medium">Garantia 30 Dias</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TruckIcon className="w-8 h-8 text-primary" />
                <p className="text-sm font-medium">Frete Grátis</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <p className="text-sm font-medium">100% Seguro</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
            <img 
              src={heroImage} 
              alt="CCY Gotas - Suplemento Alimentar Líquido Premium com Colágeno Tipo II para emagrecimento e controle de apetite" 
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
