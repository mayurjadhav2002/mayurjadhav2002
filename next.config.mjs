/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'private-user-images.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'vimeo.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/coursera_assets/meta_images/generated/**',
      },
      {
        protocol: 'https',
        hostname: 'courses.cognitiveclass.ai',
        pathname: '/certificates/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kaggle.com',
        pathname: '/learn/certification/**',
      },
      {
        protocol: 'https',
        hostname: 'udemy-certificate.s3.amazonaws.com',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hackerrank.com',
        pathname: '/certificates/**',
      },
      {
        protocol: 'https',
        hostname: "blogger.googleusercontent.com"
      }
    ],
  },
};

export default nextConfig;
