
import React, { useState, useCallback } from 'react';
import { CardDetails, GenerationStatus } from './types';
import { generateCardImage } from './services/geminiService';
import CardPreview from './components/CardPreview';

const App: React.FC = () => {
  const [details, setDetails] = useState<CardDetails>({
    name: 'SAKO',
    jobTitle: 'Agency',
    companyName: 'SAKO',
    phone: '+9212345678',
    website: 'https://sako123.lovable.app/',
    instagram: 'sakogen',
    style: 'Professional/Unique',
    backgroundColor: '#000000',
    primaryTextColor: '#FFFFFF',
    accentColor: '#D97706'
  });

  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    setStatus(GenerationStatus.LOADING);
    setError(null);
    try {
      const url = await generateCardImage(details);
      setGeneratedUrl(url);
      setStatus(GenerationStatus.SUCCESS);
    } catch (err: any) {
      setError(err.message || 'Failed to generate card image');
      setStatus(GenerationStatus.ERROR);
    }
  };

  const downloadImage = () => {
    if (!generatedUrl) return;
    const link = document.createElement('a');
    link.href = generatedUrl;
    link.download = `SAKO_BusinessCard_${details.name}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <header className="py-8 px-6 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20">
              <span className="text-black font-serif font-bold text-xl">S</span>
            </div>
            <h1 className="text-2xl font-serif font-bold tracking-wider gold-text uppercase">SAKO Designer</h1>
          </div>
          <p className="text-slate-400 text-sm hidden md:block italic">High-Resolution AI Business Card Generation</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Input Column */}
        <section className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
              Card Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Name</label>
                <input 
                  name="name" value={details.name} onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Job Title</label>
                <input 
                  name="jobTitle" value={details.jobTitle} onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                  placeholder="Agency"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Company Name</label>
              <input 
                name="companyName" value={details.companyName} onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none transition-all font-serif tracking-widest text-amber-100"
                placeholder="SAKO"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xs text-slate-500 uppercase font-bold tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Contact Details
              </h3>
              <input 
                name="phone" value={details.phone} onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                placeholder="Phone Number"
              />
              <input 
                name="website" value={details.website} onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                placeholder="Website URL"
              />
              <input 
                name="instagram" value={details.instagram} onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                placeholder="Instagram Handle"
              />
            </div>

            <div className="space-y-1 pt-2">
              <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Generation Style</label>
              <select 
                name="style" value={details.style} onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
              >
                <option value="Professional/Unique">Professional & Unique (Golden Black)</option>
                <option value="Minimalist Luxury">Minimalist Luxury</option>
                <option value="Modern Tech">Modern Tech</option>
                <option value="Classic Elegance">Classic Elegance</option>
              </select>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={status === GenerationStatus.LOADING}
              className={`w-full py-4 px-6 rounded-xl font-bold tracking-widest uppercase transition-all shadow-xl shadow-amber-900/10 flex items-center justify-center gap-3
                ${status === GenerationStatus.LOADING 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-amber-600 to-amber-400 text-black hover:scale-[1.02] active:scale-95'}`}
            >
              {status === GenerationStatus.LOADING ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Masterpiece...
                </>
              ) : 'Generate Professional Design'}
            </button>

            {error && (
              <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg text-red-400 text-sm">
                Error: {error}
              </div>
            )}
          </div>
        </section>

        {/* Display Column */}
        <section className="lg:col-span-7 space-y-12">
          {/* Live Preview */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-1.5 h-6 bg-slate-500 rounded-full"></span>
              Live Layout Preview
            </h2>
            <CardPreview details={details} />
          </div>

          {/* AI Generation Result */}
          <div className="space-y-6 pt-6 border-t border-slate-800">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
              AI Generated High-Resolution Card
            </h2>

            {!generatedUrl && status === GenerationStatus.IDLE && (
              <div className="aspect-[16/9] w-full bg-slate-900/30 rounded-2xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-slate-600 gap-4">
                <svg className="w-16 h-16 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-medium">Ready to visualize your high-end design</p>
              </div>
            )}

            {status === GenerationStatus.LOADING && (
              <div className="aspect-[16/9] w-full bg-slate-900/30 rounded-2xl border border-slate-800 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-[shimmer_2s_infinite]"></div>
                <p className="text-amber-500/80 animate-pulse font-serif tracking-widest text-lg">Dreaming in Gold & Black...</p>
                <p className="text-xs text-slate-500">Refining typography and metallic gradients</p>
              </div>
            )}

            {generatedUrl && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30">
                  <img 
                    src={generatedUrl} 
                    alt="AI Generated Business Card" 
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button 
                      onClick={downloadImage}
                      className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-110 transition-transform"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      Download High-Res (PNG)
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h4 className="text-amber-500 font-bold text-sm">Design Insight</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                      The AI has prioritized the metallic golden finish for "SAKO" to create a premium visual hierarchy. 
                      Standard printing recommendations: Use 400gsm silk cardstock with spot UV or gold foil on the logo for best physical results.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="mt-20 py-12 border-t border-slate-900 bg-black/20 text-center">
        <p className="text-slate-600 text-xs">
          © 2024 SAKO Agency • Generated with Gemini Vision Engine • Professional Standard 300DPI
        </p>
      </footer>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default App;
