import Header from "@/components/ui/Header";
import ProductImage from "@/components/ui/ProductImage";
import ProductDetails from "@/components/ui/ProductDetails";
import AddToBag from "@/components/ui/AddToBag";
import ProductAccordion from "@/components/ui/ProductAccordion";

export default function Home() {
  return (
    <div className="mobile-container bg-gray-50 min-h-screen">
      <Header />
      
      <main className="bg-white">
        <ProductImage />
        <ProductDetails />
        <AddToBag />
        <ProductAccordion />
      </main>
    </div>
  );
}
