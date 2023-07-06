import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import MetaData from "@/components/metadata";
import NavBar from "@/components/navbar";
import MadaraLayOut from "@/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaData />
        <MadaraLayOut>
        </MadaraLayOut>
    </>
  );
}
