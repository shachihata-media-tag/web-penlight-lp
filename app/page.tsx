import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MessageSection } from "@/components/MessageSection";
import { WhatIsPenlight } from "@/components/WhatIsPenlight";
import { LogoCloud } from "@/components/LogoCloud";
import { ProductLineup } from "@/components/ProductLineup";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Walkthrough } from "@/components/Walkthrough";
import { VideoCard } from "@/components/VideoCard";
import { Presets } from "@/components/Presets";
import { Customization } from "@/components/Customization";
import { MiniEstimator } from "@/components/MiniEstimator";
import { ChecklistBuilder } from "@/components/ChecklistBuilder";
import { ContactForm } from "@/components/ContactForm";
import { SalesforceScript } from "@/components/SalesforceScript";

export default function Home() {
  return (
    <main className="text-text min-h-screen selection:bg-accent selection:text-white bg-transparent">
      <Header />
      
      <Hero />
      
      <MessageSection />

      <WhatIsPenlight />
      
      <LogoCloud />

      <ProductLineup />
      
      <ComparisonTable />
      
      {/* <Walkthrough /> */}
      
      {/* <Presets /> */}

      <section
        id="case-video"
        className="py-24 bg-transparent border-t border-white/5"
        aria-label="導入イメージ動画"
      >
        <div className="container-custom">
           <h2 className="text-3xl font-bold mb-12 text-center">音響連動グッズの活用イメージ</h2>
           <VideoCard />
        </div>
      </section>

      {/* <Customization /> */}

      {/* <MiniEstimator /> */}

      <ChecklistBuilder />

      <ContactForm />
      
      <Footer />
      <MobileStickyCTA />
      
      <SalesforceScript />
    </main>
  );
}
