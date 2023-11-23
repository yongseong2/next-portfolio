"use client";
import Box from "./components/Box";
import MDXLayout from "./components/MdxLayout";
import SideBar from "./components/SideBar";
import Portfolio from "/app/markdown/portfolio.mdx";
import { Resizable } from "re-resizable";

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <Resizable
        defaultSize={{
          width: "15%",
          height: "100%",
        }}
        maxWidth="70%"
        minWidth="15%"
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <SideBar />
      </Resizable>
      <div className="py-5 pr-5">
        <Box>
          <MDXLayout>
            <Portfolio />
          </MDXLayout>
        </Box>
      </div>
    </main>
  );
}
