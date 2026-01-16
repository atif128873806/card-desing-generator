
import React from 'react';
import { CardDetails } from '../types';

interface CardPreviewProps {
  details: CardDetails;
}

const CardPreview: React.FC<CardPreviewProps> = ({ details }) => {
  return (
    <div className="relative group">
      {/* Aspect ratio container for 3.5 x 2 */}
      <div 
        className="w-full max-w-lg aspect-[3.5/2] rounded-xl shadow-2xl overflow-hidden relative border border-slate-700 transition-transform duration-500 hover:scale-[1.02]"
        style={{ backgroundColor: details.backgroundColor }}
      >
        {/* Decorative Golden Gradient Header */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-amber-200 via-amber-600 to-amber-200"></div>
        
        <div className="h-full p-8 flex flex-col justify-between relative z-10">
          {/* Main Branding Section */}
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <h1 className="text-5xl font-serif font-bold gold-text tracking-widest mb-1">
              {details.companyName}
            </h1>
            <div className="w-24 h-[1px] bg-amber-600/50 mb-4"></div>
            <p className="text-white text-sm tracking-[0.3em] uppercase opacity-80">
              {details.jobTitle}
            </p>
          </div>

          {/* Details Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-2 text-[10px] md:text-xs">
            <div className="flex flex-col items-start gap-1">
              <h2 className="text-white font-semibold text-sm mb-1">{details.name}</h2>
              <div className="flex items-center gap-2 text-white/70">
                <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>{details.phone}</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 text-white/70">
                <span>{details.website}</span>
                <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span>{details.instagram}</span>
                <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
      </div>
      
      <p className="text-center mt-4 text-slate-500 text-sm">Interactive CSS Preview (Luxury Standard)</p>
    </div>
  );
};

export default CardPreview;
