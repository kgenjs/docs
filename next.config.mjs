import NextBundleAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX(
  withBundleAnalyzer({
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    webpack: (config) => {
      // eslint-disable-next-line no-param-reassign
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
      return config;
    },
  })
);
