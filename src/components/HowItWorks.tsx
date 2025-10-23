import productImage from "@/assets/ccy-gotas-product.png";

const steps = [
  {
    number: "01",
    title: "Pingue as Gotas",
    description: "Use o conta-gotas para aplicar a dose recomendada diretamente na boca ou diluída em água."
  },
  {
    number: "02",
    title: "Absorção Rápida",
    description: "A fórmula líquida age rapidamente, sendo absorvida de forma eficiente pelo organismo."
  },
  {
    number: "03",
    title: "Resultados Visíveis",
    description: "Com uso contínuo, você notará redução do apetite e aceleração do metabolismo."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona o CCY GOTAS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simples, prático e eficaz. Veja como usar para obter os melhores resultados.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-6">
              <p className="text-sm text-muted-foreground italic border-l-4 border-accent pl-4">
                <strong className="text-foreground">Dica:</strong> Para melhores resultados, use CCY GOTAS 
                junto com uma alimentação equilibrada e prática regular de exercícios físicos.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <img 
              src={productImage} 
              alt="Como usar CCY Gotas - aplicação do suplemento líquido com conta-gotas" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
