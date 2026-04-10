/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fuhymnnxqxppvtbhiyca.supabase.co",
        pathname: "/storage/v1/object/sign/**",
      },
    ],
  },
};

module.exports = nextConfig;
