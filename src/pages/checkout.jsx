import BarItem from "@/components/feature/baritem/BarItem";
import { CardHome } from "@/components/feature/cardhome/CardHome";
import { CheckoutTable } from "@/components/feature/checkout/CheckoutTable";
import { Input } from "@/components/ui/input";

export default function Checkout() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl mb-8">Checkout Process</h1>
          <Input
            placeholder="Input the item to process here..."
            className="mt-4 mb-4"
          />
          <div className="flex justify-center items-center mb-8">
            <CheckoutTable />
          </div>
        </div>
      </div>
    </>
  );
}
