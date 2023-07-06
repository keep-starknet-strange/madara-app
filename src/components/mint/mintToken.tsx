import React from 'react'

function MintToken() {
  return (
    <form className="mt-12">
    <label
    className="block my-4"
    >
      <input
        type="text"
        name="address"
        className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
        placeholder="ERC-721 addresses"
      />
    </label>
    <label
    className="block"
    >
      <input
        type="text"
        name="amount"
        className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
        placeholder="Amount"
      />
    </label>
    <button
      type="button"
      className="bg-active p-2 mt-6 rounded-sm text-[#E62600]"
    >
      Mint NFT
    </button>
  </form>
  )
}

export default MintToken