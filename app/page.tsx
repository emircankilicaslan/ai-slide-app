import { auth, signIn, signOut } from "@/auth";
import SlideGeneratorClient from "../components/SlideGeneratorClient";

export const runtime = 'edge';

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
        <h1 className="mb-4 text-2xl font-bold">Giriş Yapın</h1>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Google ile Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  return <SlideGeneratorClient />;
}