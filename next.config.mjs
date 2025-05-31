import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Fala para o Next buscar o app/pages dentro da pasta src
  experimental: {
    appDir: true,
  },
  // Diz que o diretório base é 'src'
  // Obs: isso é para Next.js 14, teste se funciona no seu
  // Se não funcionar, tente outras configurações
  // (Por enquanto, comente ou tire isso, e vamos tentar o appDir)
  // basePath: '/src', 
};

export default withMDX(nextConfig);
