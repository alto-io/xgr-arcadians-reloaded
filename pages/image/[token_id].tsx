import type { NextPage } from "next";
import { useRouter } from "next/router";
import OraImage from "components/oraimage";
import nftCollections from "../../assets/nftCollections"

const ImagePage: NextPage = () => {
  const router = useRouter();
  const { token_id } = router.query;
  const CONTRACT_ADDRESS = nftCollections[0][0];

  return (
    <>
    <OraImage
        contract={CONTRACT_ADDRESS as string}
        tokenId={token_id as string}
    />
    </>
  );
};
export default ImagePage;