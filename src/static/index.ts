import { IchainInfo, Iwizard } from "@/types";

export const chainInfo:IchainInfo[] = [
  {
    value: "Main",
    link: "/",
  },
  {
    value: "Blocks",
    link: "/blocks",
  },
  {
    value: "Transactions",
    link: "/transaction",
  },
];

export const wizard:Iwizard[] = [
    {
      value: "Transfer",
      link: "/transfer",
    },
    {
      value: "Mint",
      link: "/mint",
    },
    {
      value: "Deploy",
      link: "/deploy",
    },
    {
        value: "Editor",
        link: "/editor",
      },
  ];