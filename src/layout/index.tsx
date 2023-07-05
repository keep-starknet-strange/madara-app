import Header from "@/components/Header";
import NavBar from "@/components/navbar";
import { useRouter } from "next/router";
import React from "react";

function MadaraLayOut({ children }: { children: React.ReactNode }) {
  const location = useRouter();
  let headerTitle = "Testnet Chain";

  switch (location.pathname) {
    case "/mint":
      headerTitle = "ERC-721";
      break;
    case "/deploy":
      headerTitle = "Deploy";
      break;
    case "/transfer":
      headerTitle = "Transfer";
      break;
    case "/editor":
      headerTitle = "Code Editor";
      break;

    case "/blocks":
      headerTitle = "Blocks";
      break;
    // Add more cases for additional routes if needed

    default:
      // Default case when no specific route matches
      headerTitle = "Testnet Chain";
  }
  return (
    <>
      <div className="flex">
        <NavBar />
        <main className="main">
          <section className="max-w-[90%]">
            <Header title={headerTitle} blocknumber={234567} />
            <div className="mt-6">{children}</div>
          </section>
        </main>
      </div>
    </>
  );
}

export default MadaraLayOut;
