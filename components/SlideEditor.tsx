"use client";
import { useState } from "react";
import { Zap, ChevronRight, Download, Sparkles, Plus, RefreshCw, Edit3 } from "lucide-react";

export default function SlideEditor({ slideData }: { slideData: any }) {
  const [slides, setSlides] = useState(slideData.slides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const currentSlide = slides[currentSlideIndex];

  const handleContentUpdate = (newContent: string, itemIndex: number) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].content[itemIndex] = newContent;
    setSlides(updatedSlides);
  };

  const handleTitleUpdate = (newTitle: string) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].title = newTitle;
    setSlides(updatedSlides);
  };

  const generateImage = () => {
    setIsRegenerating(true);
    const basePrompt = currentSlide.imagePrompt || currentSlide.title || "technology";
    const safePrompt = encodeURIComponent(basePrompt);
    const randomSeed = Math.floor(Math.random() * 9999);
    
    const aiImageUrl = `https://image.pollinations.ai/prompt/${safePrompt}?width=800&height=600&model=flux&nologo=true&seed=${randomSeed}`;
    
    setTimeout(() => {
        const updatedSlides = [...slides];
        updatedSlides[currentSlideIndex].imageUrl = aiImageUrl; 
        setSlides(updatedSlides);
        setIsRegenerating(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      <aside className="w-80 h-full flex flex-col border-r border-slate-200 bg-white shrink-0 z-20 shadow-xl">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 gap-3 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shrink-0">
            <Zap className="h-5 w-5 fill-white" />
          </div>
          <span className="font-bold text-sm truncate text-slate-800">{slideData.title}</span>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {slides.map((s: any, i: number) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIndex(i)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center gap-3 border ${
                i === currentSlideIndex 
                  ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                  : "bg-white text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${
                 i === currentSlideIndex ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
              }`}>
                {i + 1}
              </span>
              <span className="truncate flex-1">{s.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 h-full flex flex-col bg-slate-100/50 relative overflow-hidden">
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 bg-white/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
             <span className="text-slate-900 font-bold">Slayt {currentSlideIndex + 1} / {slides.length}</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-full transition-all">
                <RefreshCw className="h-3.5 w-3.5" /> AI ile Yenile
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/20 transition-all">
                <Download className="h-4 w-4" /> PDF İndir
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12 flex justify-center">
          <div className="w-full max-w-5xl bg-white border border-slate-200 shadow-xl rounded-[2rem] flex flex-row overflow-hidden min-h-[600px] h-fit">
            
            <div className="p-12 flex-1 flex flex-col justify-center">
              <input 
                value={currentSlide.title}
                onChange={(e) => handleTitleUpdate(e.target.value)}
                className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight bg-transparent border-none focus:ring-2 focus:ring-blue-200 rounded-lg p-1 w-full outline-none"
              />
              
              <ul className="space-y-6">
                {currentSlide.content.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <div 
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentUpdate(e.currentTarget.textContent || "", idx)}
                        className="text-xl text-slate-700 font-medium leading-relaxed outline-none focus:bg-yellow-50 rounded p-1 w-full border border-transparent focus:border-yellow-200 transition-all"
                    >
                      {item}
                    </div>
                    <Edit3 className="h-4 w-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/3 bg-slate-50 border-l border-slate-100 p-8 flex flex-col items-center justify-center relative">
               {currentSlide.imageUrl ? (
                   <div className="relative group w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                       <img 
                           src={currentSlide.imageUrl} 
                           alt="AI Generated" 
                           className="w-full h-full object-cover"
                           onError={(e) => {
                               (e.target as HTMLImageElement).style.display = 'none';
                               (e.target as HTMLImageElement).parentElement?.classList.add('bg-slate-200');
                           }}
                       />
                       
                       <button onClick={generateImage} className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all font-bold">
                           <RefreshCw className="mr-2 h-4 w-4" /> Değiştir
                       </button>
                   </div>
               ) : (
                   <div className="text-center">
                       <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 mb-4 shadow-sm">
                           <Sparkles className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                           <p className="text-sm text-slate-500 italic">"{currentSlide.imagePrompt}"</p>
                       </div>
                       <button 
                         onClick={generateImage}
                         disabled={isRegenerating}
                         className="px-6 py-3 bg-black text-white rounded-xl font-bold text-sm shadow-lg hover:bg-slate-800 transition-all flex items-center mx-auto gap-2"
                        >
                           {isRegenerating ? "Üretiliyor..." : "✨ Görseli Oluştur"}
                       </button>
                   </div>
               )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}