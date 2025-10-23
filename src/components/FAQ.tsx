import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O CCY Gotas é seguro para consumo?",
    answer: "Sim! CCY Gotas é um suplemento alimentar natural, desenvolvido com ingredientes selecionados. Entretanto, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um médico antes do uso."
  },
  {
    question: "Como devo usar o CCY Gotas?",
    answer: "Recomenda-se ingerir as gotas conforme indicado no rótulo do produto, geralmente diluído em água ou diretamente na boca, antes das principais refeições. Sempre siga as instruções da embalagem."
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Os resultados variam de pessoa para pessoa, mas muitos usuários relatam sentir diferença na redução do apetite nas primeiras semanas. Para resultados mais consistentes no emagrecimento, recomenda-se o uso contínuo por pelo menos 3 meses."
  },
  {
    question: "Qual é a diferença entre as gotas e as cápsulas?",
    answer: "A fórmula em gotas tem absorção mais rápida e eficiente pelo organismo em comparação com cápsulas, pois não precisa ser digerida no estômago primeiro. Isso significa que os ingredientes ativos chegam mais rapidamente à corrente sanguínea."
  },
  {
    question: "Qual kit devo escolher?",
    answer: "Para resultados duradouros, recomendamos o kit de 3 a 5 meses. O kit de 12 meses oferece o melhor custo-benefício e é ideal para quem busca uma transformação completa. O kit de 1 mês é perfeito para experimentar o produto."
  },
  {
    question: "Existe garantia de reembolso?",
    answer: "Sim! Oferecemos garantia de 30 dias. Se não ficar satisfeito com o produto, você pode solicitar o reembolso integral dentro deste período, sem complicações."
  },
  {
    question: "O produto tem aprovação da ANVISA?",
    answer: "CCY Gotas é um suplemento alimentar produzido seguindo todas as normas e regulamentações vigentes no Brasil. Sempre adquira produtos de fontes confiáveis e verifique o selo de originalidade."
  },
  {
    question: "Posso usar CCY Gotas com outros medicamentos?",
    answer: "Se você faz uso contínuo de medicamentos, é importante consultar seu médico antes de iniciar qualquer suplementação, para garantir que não haja interações indesejadas."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o CCY GOTAS
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border-2 border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
