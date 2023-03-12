import type { NextPage } from "next";
import { useRouter } from "next/router";

const AnimationPage: NextPage = () => {
  const router = useRouter();
  const {image, animation} = router.query;

  return (
    <>
      <h2 className="font-bold">{animation}</h2>
    </>
  );
};


export default AnimationPage;

