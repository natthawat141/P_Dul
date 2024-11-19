import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ข้าม ESLint checks ทั้งหมด
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ข้าม TypeScript checks
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
