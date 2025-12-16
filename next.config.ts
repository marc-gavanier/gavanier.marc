import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
