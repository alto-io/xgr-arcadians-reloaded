import type { NextPage } from "next";
import { useRouter } from "next/router";
import OraGlbViewer from "components/oraglbviewer";
import nftCollections from "../../assets/nftCollections"

import Nft from "components/Nft"

const OraPage: NextPage = () => {
  const router = useRouter();
  const { token_id } = router.query;
  const CONTRACT_ADDRESS = nftCollections[0][0];

    // initialize ora viewer
    const onCanvasReady = async (canvas: any) => {
        console.log("onCanvasReady");
    }


  return (
    <>
    <OraGlbViewer
        onCanvasReady={onCanvasReady}    
        contract={CONTRACT_ADDRESS as string}
        tokenId={token_id as string}
    />
    </>
  );
};
export default OraPage;

{/* <Nft
contract={contract_address as string}
tokenId={token_id as string}
service={""}
url={""}
/> */}
