'use client';
import MdxLayout from '../../components/MdxLayout';
import Hello from '/app/markdown/hello.mdx';

export default function ShouldWork() {
  return (
    <MdxLayout>
      <Hello />
    </MdxLayout>
  );
}
