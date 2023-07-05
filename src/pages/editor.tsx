import MetaData from "@/components/metadata";
import MadaraLayOut from "@/layout";
import React from "react";

function TextEditor() {
  return (
    <MadaraLayOut>
      <MetaData />
      <p className="text-small text-[#9CA3AF]">
        You can use this tool to generate/test some code using wizard
      </p>
    </MadaraLayOut>
  );
}

export default TextEditor;
