export const runtime = 'edge';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-600 text-white">
      <h1 className="text-6xl font-bold mb-4">
        BAŞARDIK! 🚀
      </h1>
      <p className="text-2xl">
        Siyah üçgen gitti! Artık kontrol bizde.
      </p>
      <div className="mt-8 p-6 bg-white text-blue-800 rounded-xl font-bold text-xl shadow-lg">
        Versiyon: Mavi Ekran Testi
      </div>
    </div>
  );
}