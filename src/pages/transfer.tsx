import MetaData from "@/components/metadata";
import TransferToken from "@/components/transfer";
import MadaraLayOut from "@/layout";
import React from "react";

function Transfer() {
  return (
    <MadaraLayOut>
        <MetaData/>
      <p className="text-small text-[#9CA3AF]">
        You can transfer tokens to another address using this tool
      </p>

      <TransferToken />
    </MadaraLayOut>
  );
}

export default Transfer;
