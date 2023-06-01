import { useRef, useState, useEffect } from "react";
import { useNft } from "use-nft"
import * as AvatarBuilder from "../../avatar/";
import type { NftMetadata } from "use-nft"

interface OraImageProps {
    contract: any,
    tokenId: any
}

type Attribute = {
    trait_type: string
    value: string
}

const CANVAS_WIDTH = 399;
const CANVAS_HEIGHT = 399;

function OraImage ( {
    contract, 
    tokenId
    } : OraImageProps )
    {
    const { nft, loading, error, reload } = useNft(contract, tokenId)
    const reactCanvasOra = useRef(null);
    const [ canvasSize, setCanvasSize ] = useState(
      {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT
      }
    );

    useEffect(() => {
        const { current: canvas } = reactCanvasOra;
        if (!canvas) return;

        setCanvasSize(
          {
            height: window.innerHeight, 
            width: window.innerWidth
          }
        )

        prepareJsOra(canvas);
    }, []);  
    

    function prepareJsOra(canvas) {
        if ((window as any).jsora == null) {
            setTimeout(function() {prepareJsOra(canvas)}, 50);
        }

        else {
            AvatarBuilder.initializeOra(canvas);
        }
    }

    let loadedNft:NftMetadata;

    return (
        <>

        
          <canvas height={canvasSize.height} width={canvasSize.width} ref={reactCanvasOra} />
          {(() => {
          if (loading) {
            return <NftLoading />
          }
          if (error) {
            return <NftError error={error} reload={reload} />
          }
          
          loadedNft = nft;

          // show attributes on console
          console.log(nft.rawData?.attributes);

          AvatarBuilder.renderOraCanvas(nft);

          return (
          <> 
          <AnimatedNFT nft={nft} />
          </>
          )
          
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
  
    // uncomment below to see usenft results
    return (
    <>
      {          

           // image && <img src={image} height={canvasHeight} alt="" />
           //   (attributes as Array<Attribute>).map((attrib) => {
            //       return (
            //           <p key={attrib.trait_type}>{attrib.value}</p>
                      
            //       )
            //   })
    }
    </>
    )


}

OraImage.displayName = "OraImage";

export default OraImage;