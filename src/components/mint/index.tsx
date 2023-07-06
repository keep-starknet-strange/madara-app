import React from "react";
import DeployToken from "./deployToken";
import MintToken from "./mintToken";

function MintComponent() {
  return (
    <section>
      <p className="text-small text-[#9CA3AF]">
        You can deploy a custom contract using this tool
      </p>

      <DeployToken />
      <MintToken />
    </section>
  );
}

export default MintComponent;
