import MDXLayout from "./MdxLayout";
import Portfolio from "/app/markdown/portfolio.mdx";

export default function Content() {
  return (
    <div>
      <MDXLayout>
        <Portfolio></Portfolio>
      </MDXLayout>
    </div>
  );
}
