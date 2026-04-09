import { MetadataRoute } from 'next';
import { SITE_METADATA } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_METADATA.title,
    short_name: SITE_METADATA.siteName,
    description: SITE_METADATA.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
