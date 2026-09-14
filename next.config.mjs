/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Vercel deployment, do NOT use output: "export" (Vercel handles its own build output).
  // If you need static export for cPanel (out/), build locally with: STATIC_EXPORT=true npm run build
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" } : {}),
  devIndicators: false,
  // Skip ESLint during `next build` to avoid flat-config import issues on Windows/Vercel
  // You can still run `npm run lint` locally. Remove this if you want strict lint on build.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
