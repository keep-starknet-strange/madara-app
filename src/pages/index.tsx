import MetaData from "@/components/metadata";
import MadaraLayOut from "@/layout";
import LatestBlock from "@/components/main/latestblock";
import LatestTransaction from "@/components/main/latest-transaction";


export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaData />
      <MadaraLayOut>
       <LatestBlock/>

       <LatestTransaction/>
      </MadaraLayOut>
    </>
  );
}
