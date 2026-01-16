"use client";

import { useState } from "react";
import SlideEditor from "./SlideEditor";

export default function SlideGeneratorClient() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [slideData, setSlideData] = useState<any>(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Bir hata oluştu");
      }

      setSlideData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (slideData) {
    return <SlideEditor slideData={slideData} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] px-6">
      <div className="bg-white p-12 rounded-3xl shadow-xl w-full max-w-lg border border-gray-100 text-center">

        <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
          AI Slayt Oluşturucu
        </h1>
        <p className="text-gray-500 mb-10 text-base font-medium">
          Konuyu yazın, yapay zeka saniyeler içinde taslağı çıkarsın.
        </p>

        <input
          type="text"
          placeholder="Örn: Yapay Zekanın Geleceği, Futbol Tarihi..."
          className="w-full p-5 border border-gray-200 rounded-2xl mb-4 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-800 placeholder-gray-400 bg-gray-50 font-medium"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        />

        <button
          onClick={handleGenerate}
          disabled={loading || !prompt}
          className={`w-full py-5 rounded-2xl font-bold text-lg transition-all transform active:scale-[0.98] shadow-lg ${
            loading || !prompt
              ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
              : "bg-black hover:bg-gray-800 text-white shadow-xl shadow-gray-200"
          }`}
        >
          {loading ? "Hazırlanıyor..." : "✨ Sunumu Oluştur"}
        </button>

        {error && (
          <div className="mt-6 p-4 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100">
            🚨 {error}
          </div>
        )}
      </div>
    </div>
  );
}