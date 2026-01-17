export const runtime = 'edge';

import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SlideGeneratorClient from "@/components/SlideGeneratorClient"; 

export default async function DashboardPage() {
  const session = await auth();

 
  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      
      <SlideGeneratorClient /> 
    </main>
  );
}