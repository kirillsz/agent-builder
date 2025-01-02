import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Templates } from "@/components/Templates";
import { Background3D } from "@/components/Background3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Background3D />
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <Templates />
      </main>
    </div>
  );
};

export default Index;