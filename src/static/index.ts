import { IchainInfo, IblocksTable,ItransactionsTable, Iwizard } from "@/types";

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
    link: "/transactions",
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

 export const tableData:IblocksTable[] =[
    {
      block: "1234",
      hash: "0x123dgfe",
      status: "Accepted",
      age: "10 sec"
    },
    {
      block: "1235",
      hash: "0x456xyz",
      status: "Pending",
      age: "15 sec"
    },
    {
      block: "1236",
      hash: "0x456xyz",
      status: "Pending",
      age: "15 sec"
    },
    {
      block: "1237",
      hash: "0x456xyz",
      status: "Pending",
      age: "15 sec"
    }
  ];




  export const tranactionsData:ItransactionsTable[] =[
    {
      hash: "0x123dgfe",
      function: "mint",
      status: "Accepted",
      age: "10 sec"
    },
    {
      hash: "0x456xyz",
      function: "transfer",
      status: "Pending",
      age: "15 sec"
    },
    {
      hash: "0x456xyz",
      function: "swap",
      status: "Pending",
      age: "15 sec"
    },
    {
      hash: "0x456xyz",
      function: "mint",
      status: "Pending",
      age: "15 sec"
    }
  ];