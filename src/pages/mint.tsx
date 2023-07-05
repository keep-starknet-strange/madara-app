import MetaData from "@/components/metadata";
import MintComponent from "@/components/mint";
import MadaraLayOut from "@/layout";
import React from "react";

function Mint() {
  return (
    <MadaraLayOut>
      <MetaData/>
      <MintComponent />
    </MadaraLayOut>
  );
}

export default Mint;
