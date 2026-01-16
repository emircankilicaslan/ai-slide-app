import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
   
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Lütfen giriş yapın." }, { status: 401 });
    }

    const { prompt } = await req.json();

   
    const apiKey = "3XNtNahxQ04GdT1qkV3jNfP65QcU7NnMuxHfsfYp";

   
    const systemPrompt = `
      Sen bir sunum asistanısın. Aşağıdaki konuya göre Türkçe, 4 sayfalık bir sunum planı hazırla.
      
      Çıktıyı SADECE ve SADECE saf JSON formatında ver. Başlangıçta veya sonda yazı, yorum, markdown (\`\`\`) olma-sın.
      
      Format şu şekilde olmalı:
      {
        "title": "Sunum Başlığı",
        "slides": [
          {
            "id": 1,
            "title": "Slayt Başlığı",
            "content": ["Madde 1", "Madde 2", "Madde 3"],
            "imagePrompt": "İngilizce görsel üretim promptu"
          }
        ]
      }
    `;

 
    const response = await fetch("https://api.cohere.ai/v1/chat", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-nightly", 
        message: systemPrompt + "\n\nKonu: " + prompt,
        temperature: 0.3
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Cohere API Hatası");
    }

    const result = await response.json();
    let text = result.text;

    
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    
    const jsonStartIndex = text.indexOf('{');
    const jsonEndIndex = text.lastIndexOf('}');
    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      text = text.substring(jsonStartIndex, jsonEndIndex + 1);
    }

    return NextResponse.json(JSON.parse(text));

  } catch (error: any) {
    console.error("COHERE HATASI:", error);
    return NextResponse.json({ error: "Hata: " + error.message }, { status: 500 });
  }
}