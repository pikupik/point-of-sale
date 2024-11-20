import BarItem from "@/components/feature/baritem/BarItem";
import { CardHome } from "@/components/feature/cardhome/CardHome";
import axiosClient from "@/utils/axiosClient";
import { useEffect, useState } from "react";
const { useRouter } = require("next/router");

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true); // Menunggu proses verifikasi

      try {
        // Mengirim permintaan untuk memverifikasi token, sertakan cookie
        await axiosClient.get("/users/protected", {
          withCredentials: true, // Mengirim cookie secara otomatis
        });

        setIsAuthenticated(true); // Jika berhasil, set autentikasi ke true
        setLoading(false); // Set loading selesai
      } catch (error) {
        setIsAuthenticated(false); // Jika error (token tidak valid), set autentikasi ke false
        setLoading(false); // Set loading selesai
        router.push("/login"); // Redirect ke login jika token tidak valid
      }
    };

    verifyToken();
  }, [router]);

  if (loading) return <div>Loading...</div>; //tampilkan loading sementara
  if (!isAuthenticated) return null; // jika tidak ter autentikasi maka halaman tidak akan ditampilkan

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
