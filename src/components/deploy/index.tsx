import React from "react";

function Deploy() {
  return (
    <section className="mt-4">
      <p className="text-small text-[#9CA3AF]">
        You can deploy a custom contract using this tool
      </p>

      <form className="mt-12">
        <label
          className="flex flex-col items-center justify-center w-[80%] bg-[#151515] h-10 border focus:outline-none border-[#2C2E31] rounded-sm cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          htmlFor="file"
        >
            <div className="flex justify-between w-full p-2">
              <p className="text-[#9CA3AF]">Upload contract json</p>
              <p className="text-[#9CA3AF] opacity-40">choose a file...</p>
            </div>
            <input
              type="file"
              id="file"
              className="border hidden p-2 border-[#2C2E31]"
              placeholder="Upload contract json"
            />
        </label>
        <button type="button" className="bg-active p-2 mt-12 rounded-sm text-[#E62600]">Deploy</button>
      </form>
    </section>
  );
}

export default Deploy;
