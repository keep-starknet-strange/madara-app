import React from "react";
import Image from "next/image";
import { shortenAddress } from "@/utils";
function Connected() {
  return (
    <>
      <div className="absolute top-[93%]">
        <h5>Connected Address</h5>
        <div className="flex items-center space-x-2">
          <p>{shortenAddress("0x123444455")}</p>
          <Image
            src="/assets/disconnect.png"
            width={10}
            height={10}
            alt="app status"
          />
        </div>
      </div>
    </>
  );
}

export default Connected;
