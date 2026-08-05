import ClientLogosSection from "@/components/home/ClientLogosSection/ClientLogosSection";
import DesignStatementSection from "@/components/home/DesignStatementSection/DesignStatementSection";
import Hero from "@/components/home/Hero/Hero";
import PortfolioSection from "@/components/home/PortfolioSection/PortfolioSection";
import SayHelloSection from "@/components/home/SayHelloSection/SayHelloSection";

export default function Home() {
  return (
    <>
    <Hero />
    <DesignStatementSection />
    <ClientLogosSection />
    <PortfolioSection />
    <SayHelloSection />
    
    </>
  );
}
