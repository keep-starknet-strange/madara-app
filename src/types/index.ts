export type IchainInfo = {
  value: string;
  link: string;
};


export type Iwizard = {
    value: string;
    link: string;
  };
  

export type Iheader = {
    title:string,
    blocknumber:number
}

export type IblocksTable ={
  block:string,
  hash:string,
  status:string,
  age:string
}

export type ItransactionsTable = {
hash:string,
function:string,
status:string,
age:string
}