import Deploy from "@/components/deploy";
import MetaData from "@/components/metadata";
import MadaraLayOut from "@/layout";
import React from "react";

function DeployContract() {
  return (
    <MadaraLayOut>
      <MetaData />
      <Deploy />
    </MadaraLayOut>
  );
}

export default DeployContract;
