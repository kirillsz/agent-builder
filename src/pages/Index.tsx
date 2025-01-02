import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Templates } from "@/components/Templates";
import { SparklesCore } from "@/components/SparklesCore";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 z-10">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#F2FCE2"
          particleDensity={100}
          speed={2}
          className="h-full w-full"
        />
      </div>
      <div className="relative z-20">
        <Header />
        <main className="pt-16">
          <Hero />
          <Features />
          <Templates />
        </main>
      </div>
    </div>
  );
};

export default Index;