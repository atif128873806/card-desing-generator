
import { GoogleGenAI } from "@google/genai";
import { CardDetails } from "../types";

export const generateCardImage = async (details: CardDetails): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Create a high-resolution, professional business card design in standard horizontal 3.5" x 2" aspect ratio.
    The background MUST be solid deep black (#000000).
    The company name "${details.companyName}" must be in a striking, high-gloss 3D metallic golden serif font, similar to luxury branding.
    The person's name "${details.name}" and job title "${details.jobTitle}" should be clean, modern, and white.
    
    INCLUDE visually distinct, elegant metallic golden icons for the following contact details:
    - Phone: ${details.phone} (Classic phone handset icon)
    - Website: ${details.website} (Minimalist globe or link icon)
    - Instagram: ${details.instagram} (Standard Instagram glyph icon)
    
    The icons should be small, refined, and consistently styled in the same metallic gold as the company name.
    The layout should be minimalist, elegant, and balanced with clear white-space. 
    Use a sharp, clear design with well-defined edges. 
    Place the design against a plain white background to showcase the card as a high-res digital mockup.
    The overall style should be "${details.style}" and feel expensive.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9", // Approximate for horizontal card presentation
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    
    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    throw error;
  }
};
