import type { ReactNode } from "react"
import type { NftMetadata } from "use-nft"

import React from "react"
import { useNft } from "use-nft"
import { css } from "@emotion/react"
import LoopVideo from "./LoopVideo"

export const colors = {
    background: "#111111",
    accent: "#a669a2",
    accentOver: "#dddddd",
    accentOver2: "#000000",
  }

type NftProps = {
  contract: string
  tokenId: string
  service: string
  url: string
}

function Nft({ contract, tokenId, service, url }: NftProps) {
  const { nft, loading, error, reload } = useNft(contract, tokenId)

  return (
    <Card url={nft && url} label={service}>
      {(() => {
        if (loading) return <NftLoading />
        if (error) return <NftError error={error} reload={reload} />
        return <NftDetails nft={nft} />
      })()}
    </Card>
  )
}

function Card({
  label,
  url,
  children,
}: {
  label: string
  url?: string
  children: ReactNode
}) {
  const linkProps = url ? { href: url, target: "_blank" } : {}
  return (
    <a
      {...linkProps}
    >
      <section
      >
        <div
        >
          {children}
          <div
          >
            {label}
          </div>
        </div>
      </section>
    </a>
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

function NftDetails({ nft }: { nft?: NftMetadata }) {
  if (!nft) {
    return null
  }

  const { image } = nft
  const name = nft.name || "Untitled"
  const description = nft.description || "−"
  return (
    <>
      <div>
        {image.includes(".mp4") ? (
          <LoopVideo type="video/mp4" src={image} height="280" />
        ) : (
          image && <img src={image} height="280" alt="" />
        )}
      </div>
      <h1>
        <span title={name}>{name}</span>
      </h1>
      <p
        title={description}
      >
        {description}
      </p>
    </>
  )
}

export default Nft