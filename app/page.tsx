"use client";
import Box from "./components/Box";
import SideBar from "./components/SideBar";
import { Resizable } from "re-resizable";
import Title from "./components/Title";
import Content from "./components/Content";

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
      <div className="w-full py-5 pr-5">
        <Box>
          <Title />
          <Content />
        </Box>
      </div>
    </main>
  );
}
