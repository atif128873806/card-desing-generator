
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
                <svg className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{details.phone}</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 text-white/70">
                <span>{details.website}</span>
                <svg className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span>{details.instagram}</span>
                <svg className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
      </div>
      
      <p className="text-center mt-4 text-slate-500 text-sm">Interactive CSS Preview (Standard Layout)</p>
    </div>
  );
};

export default CardPreview;
