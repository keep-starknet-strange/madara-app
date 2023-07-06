import React from "react";

function DeployToken() {
  return (
    <form className="mt-12">
      <label
      className="block my-4"
      >
        <input
          type="text"
          name="name"
          className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
          placeholder="Name"
        />
      </label>

      <label
      className="block my-4"
      >
        <input
          type="text"
          name="symbol"
          className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
          placeholder="Symbol"
        />
      </label>
      <label
      className="block my-4"
      >
        <input
          type="text"
          name="supply"
          className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
          placeholder="Max supply"
        />
      </label>
      <label
      className="block"
      >
        <input
          type="text"
          name="tokenUri"
          className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
          placeholder="Token URI"
        />
      </label>
      <button
        type="button"
        className="bg-active p-2 mt-6 rounded-sm text-[#E62600]"
      >
        Deploy NFT
      </button>
    </form>
  );
}

export default DeployToken;
