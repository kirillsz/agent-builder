import { Header } from "@/components/Header";
import { MarketplaceGrid } from "@/components/marketplace/MarketplaceGrid";
import { MarketplaceFilters } from "@/components/marketplace/MarketplaceFilters";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container pb-16 pt-20">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64">
            <MarketplaceFilters />
          </aside>
          <div className="flex-1">
            <MarketplaceGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Marketplace;