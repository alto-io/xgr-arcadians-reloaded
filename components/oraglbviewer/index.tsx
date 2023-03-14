import type { ReactNode } from "react"
import type { NftMetadata } from "use-nft"

import React from "react"
import { useNft } from "use-nft"
import { css } from "@emotion/react"
import LoopVideo from "../LoopVideo"

export const colors = {
    background: "#111111",
    accent: "#a669a2",
    accentOver: "#dddddd",
    accentOver2: "#000000",
  }

type NftProps = {
  contract: string
  tokenId: string
}

type Attribute = {
    trait_type: string
    value: string
}


function OraGlbViewer({ contract, tokenId }: NftProps) {
  const { nft, loading, error, reload } = useNft(contract, tokenId)

  return (
    <>
      {(() => {
        if (loading) return <NftLoading />
        if (error) return <NftError error={error} reload={reload} />
        return <AnimatedNFT nft={nft} />
      })()}
    </>
  )
}

function NftLoading() {
  return (
    <div
    >
      Loading…
    </div>
  )
}

function NftError({ error, reload }: { error: Error; reload: () => void }) {
  return (
    <div
    >
      <p>
        Loading error.
        <br /> <button onClick={reload}>Retry?</button>
      </p>
    </div>
  )
}

function AnimatedNFT({ nft }: { nft?: NftMetadata }) {
  if (!nft) {
    return null
  }

  const { image, rawData } = nft

  let attributes = rawData?.attributes;

  return (
    <>
      <div>
        {
          image && <img src={image} height="280" alt="" />
        }
        {
            (attributes as Array<Attribute>).map((attrib) => {
                return (
                    <p key={attrib.trait_type}>{attrib.value}</p>
                    
                )
            })
        }
      </div>
    </>
  )
}

export default OraGlbViewer


// function AnimatedNFT({
//   nft,
//   children,
// }: {
//   nft?: NftMetadata,    
//   children: ReactNode
// }) {
//   return (
//       <section
//       >
//         <div
//         >
//           {children}
//           <div
//           >
//           </div>
//         </div>
//       </section>
//   )
// }
