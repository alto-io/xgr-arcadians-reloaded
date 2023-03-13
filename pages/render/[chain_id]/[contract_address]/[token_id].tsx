import type { NextPage } from "next";
import { useRouter } from "next/router";
import { OraImage } from "components/oraimage";
import Nft from "components/Nft"

const OraPage: NextPage = () => {
  const router = useRouter();
  const { chain_id, contract_address, token_id } = router.query;

  return (
    <Nft
        contract={contract_address as string}
        tokenId={token_id as string}
        service={""}
        url={""}
    />
  );
};
export default OraPage;
