import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { useTrail, animated } from "react-spring"
import Nft from "./Nft"

type NftGridProps = {
  nftCollections: Array<[string, string, string]>
}

function NftGrid({ nftCollections }: NftGridProps) {
  const [progress, setProgress] = useState(0)
  const trail = useTrail(nftCollections.length, {
    progress,
    config: {
      mass: 0.5,
      tension: 400,
      friction: 30,
    },
  })

  useEffect(() => setProgress(1), [])

  return (
    <div
    >
      {trail.map(({ progress }, index) => {
        const [contract, collectionName, url] = nftCollections[index]
        return (
          <animated.div
            key={contract + 1}
            style={{
              opacity: progress as any, // until react-spring 9.0.0-rc.4, see https://github.com/pmndrs/react-spring/issues/1102
              transform: progress.to(
                (v) => `translate3d(0, ${(1 - v) * 10}px, 0)`
              ),
            }}
          >
            <Nft
              contract={contract}
              tokenId={"34"}
            />
          </animated.div>
        )
      })}
    </div>
  )
}

export default NftGrid
