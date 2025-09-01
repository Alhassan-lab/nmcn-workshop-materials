import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '6000-firebase-studio-1755038255066.cluster-cbeiita7rbe7iuwhvjs5zww2i4.cloudworkstations.dev',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
