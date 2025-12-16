"use client";

import { PlayCircle } from "lucide-react";
import { useState } from "react";

export function VideoCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL;

  return (
    <div className="w-full aspect-video bg-black rounded-hero border border-white/10 overflow-hidden relative group">
      {videoUrl ? (
        <video 
            src={videoUrl} 
            controls={true} 
            className="w-full h-full object-cover"
            poster="/video-poster-placeholder.jpg" // Ideally would exist
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/50">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-muted font-medium">プロモーション動画 (準備中)</p>
            <p className="text-xs text-muted/50 mt-2">NEXT_PUBLIC_DEMO_VIDEO_URL 未設定</p>
        </div>
      )}
    </div>
  );
}
