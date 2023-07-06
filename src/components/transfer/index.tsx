import React from 'react'

function TransferToken() {
  return (
    <form className="mt-12">
    <label
    className="block my-4"
    >
      <input
        type="text"
        name="token"
        className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
        placeholder="Token address"
      />
    </label>

    <label
    className="block my-4"
    >
      <input
        type="text"
        name="recipient"
        className="border w-[80%] p-2 border-[#2C2E31] bg-[#151515] outline-none"
        placeholder="Recipient address"
      />
    </label>
    <label
    className="block my-4"
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
      Transfer tokens
    </button>
  </form>
  )
}

export default TransferToken