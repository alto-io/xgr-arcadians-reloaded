import type { NextPage } from "next";
import { useRouter } from "next/router";

const ImagePage: NextPage = () => {
  const router = useRouter();
  const {image} = router.query;

  return (
    <>
      <h2 className="font-bold">{image}</h2>
    </>
  );
};
export default ImagePage;
