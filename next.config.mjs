/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leetcard.jacoblin.cool',
        pathname: '**', // matches any path after leetcard.jacoblin.cool/
      },
    ],
    dangerouslyAllowSVG: true, // ⚠️ Only enable if you trust the source
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;