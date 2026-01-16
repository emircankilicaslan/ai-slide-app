import { auth, signIn, signOut } from "@/auth";
import SlideGeneratorClient from "../components/SlideGeneratorClient";

export default async function Home() {
  const session = await auth();

 
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Google ile Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  
  return <SlideGeneratorClient />;
}
