import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    
    serverActions:{
      bodySizeLimit: '5mb'
    }
  },
  reactStrictMode:false,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'jdyhahryxyldwjcjyiib.supabase.co'
      }
    ]
  }
};

export default nextConfig;
