export const runtime = 'edge';

import { auth } from "@/auth";
import { redirect } from "next/navigation";
// Senin mevcut bileşenini içe aktarıyoruz
import SlideGeneratorClient from "@/components/SlideGeneratorClient"; 

export default async function DashboardPage() {
  const session = await auth();

  // Giriş yapılmamışsa ana sayfaya fırlat
  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Senin mülakat için hazırladığın asıl slayt oluşturma motoru */}
      <SlideGeneratorClient /> 
    </main>
  );
}