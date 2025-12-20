'use client';

export function VideoCard() {
  const vimeoVideoId = '1148225012';

  return (
    <div className='w-full aspect-video bg-black rounded-hero border border-white/10 overflow-hidden relative'>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoVideoId}?title=0&byline=0&portrait=0`}
        className='w-full h-full'
        frameBorder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        allowFullScreen
        title='実際の導入イメージ'
      />
    </div>
  );
}
