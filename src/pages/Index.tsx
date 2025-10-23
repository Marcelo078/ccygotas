import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingCards } from "@/components/PricingCards";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Helmet } from "react-helmet";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "CCY Gotas - Suplemento Alimentar Líquido Premium",
    "image": "https://app.monetizze.com.br/r/AJB21485231",
    "description": "CCY Gotas é um suplemento líquido premium com Colágeno Tipo II que auxilia no emagrecimento, acelera o metabolismo e reduz o apetite. Fórmula natural com sabor abacaxi.",
    "brand": {
      "@type": "Brand",
      "name": "CCY Gotas"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://app.monetizze.com.br/r/AJB21485231",
      "priceCurrency": "BRL",
      "lowPrice": "197.00",
      "highPrice": "697.00",
      "offerCount": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };

  return (
    <>
      <Helmet>
        <title>CCY Gotas - Suplemento Premium para Emagrecimento | Fórmula com Colágeno Tipo II</title>
        <meta 
          name="description" 
          content="CCY Gotas: suplemento líquido que acelera metabolismo e reduz apetite. Fórmula Premium com Colágeno Tipo II. Frete grátis e garantia de 30 dias." 
        />
        <meta name="keywords" content="ccy gotas, emagrecimento, suplemento líquido, colágeno tipo ii, perder peso, controle de apetite, metabolismo" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CCY Gotas - Suplemento Premium para Emagrecimento" />
        <meta property="og:description" content="Suplemento líquido que acelera o metabolismo e reduz o apetite. Fórmula Premium com Colágeno Tipo II." />
        <meta property="og:url" content="https://app.monetizze.com.br/r/AJB21485231" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CCY Gotas - Suplemento Premium para Emagrecimento" />
        <meta name="twitter:description" content="Acelere seu metabolismo e controle o apetite com CCY Gotas." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        <link rel="canonical" href="https://app.monetizze.com.br/r/AJB21485231" />
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <HowItWorks />
        <PricingCards />
        <FAQ />
        <FinalCTA />
        
        <footer className="bg-primary/5 border-t border-border py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p className="mb-2">
              © 2025 CCY Gotas. Este site é de divulgação de produto. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Este produto não substitui uma alimentação equilibrada e seu consumo deve ser orientado por profissional habilitado.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
