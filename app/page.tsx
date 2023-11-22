'use client'
import MDXLayout from './components/MdxLayout';
import Portfolio from '/app/markdown/portfolio.mdx';

export default function Home() {
  return (
    <main>
      <MDXLayout>
        <Portfolio/>
      </MDXLayout>
    </main>
  );
}
