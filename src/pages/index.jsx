import BarItem from "@/components/feature/baritem/BarItem";
import { CardHome } from "@/components/feature/cardhome/CardHome";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl mb-8">Hi, Enjoy Your Work</h1>
          <div className="flex justify-center items-center mb-8">
            <CardHome />
          </div>
          <BarItem />
        </div>
      </div>
    </>
  );
}
