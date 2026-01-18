# 🤖 AI Slide Generator (Next.js 14)

**Canlı Demo:** [https://ai-slide-app.pages.dev](https://ai-slide-app.pages.dev)

Yapay zeka destekli, modern ve interaktif bir sunum oluşturma aracı. Kullanıcıdan alınan bir konu başlığına göre saniyeler içinde başlıklar, içerikler ve yapay zeka tarafından üretilen görsellerle donatılmış 4 sayfalık bir sunum taslağı oluşturur.

---


## 🚀 Özellikler

* **AI Destekli İçerik Üretimi:** Cohere API (LLM) kullanılarak verilen konuya uygun mantıklı slayt yapıları ve içerikleri oluşturulur.
* **Generative AI Görseller:** Her slayt için içeriğe özel promptlar oluşturulur ve Pollinations/Flux modeli ile gerçek zamanlı görseller üretilir.
* **Modern UI/UX:** Tailwind CSS ile tasarlanmış, duyarlı (responsive) ve şık arayüz.
* **Slide Editor:** Slayt başlıkları ve maddeleri kullanıcı tarafından tıklanarak (Editable) düzenlenebilir.
* **Güvenli Giriş:** Google OAuth ve NextAuth.js ile güvenli oturum yönetimi.
* **PDF Çıktısı:** Hazırlanan sunumlar PDF formatında indirilebilir.

## 🖼️ Ekran Görüntüleri

### 1. Giriş ve Prompt Ekranı
Kullanıcıların konu başlığını girdiği minimalist arayüz.
<img width="1139" height="628" alt="image" src="https://github.com/user-attachments/assets/a17c48a0-10d8-4b72-a147-084607dc6172" />

<img width="1417" height="764" alt="image" src="https://github.com/user-attachments/assets/406e361f-e613-447f-81fd-a0f9137353a8" />


### 2. Slayt Detay ve Düzenleme
Sol tarafta slayt akışı, sağ tarafta detaylı içerik ve AI tarafından üretilen dinamik görsel.

<img width="1903" height="906" alt="image" src="https://github.com/user-attachments/assets/6e4a4faf-4985-4a56-81df-fd3bf366d955" />


---

## 🛠️ Kullanılan Teknolojiler

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Dil:** TypeScript
* **Stil:** Tailwind CSS
* **Auth:** NextAuth.js (Google Provider)
* **AI (Text):** Cohere API
* **AI (Image):** Pollinations.ai (Flux Model)
* **Deployment:** Cloudflare Pages

---
Developed by **Emircan Kılıçaslan**
