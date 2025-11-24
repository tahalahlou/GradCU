import { MetadataRoute } from 'next'

// Add the required export for static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GradCU - Columbia Course Planner',
    short_name: 'GradCU',
    description: 'Interactive tool to plan your Columbis academic journey',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#B3A369',
    icons: [
      {
        src: '',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
} 