import type { NftMetadata } from "use-nft"

import { createContext, useEffect, useRef, useState } from "react";
import { useNft } from "use-nft"
import { Engine, Scene } from "@babylonjs/core";
import * as AvatarBuilder from "../../avatar/";

export const colors = {
    background: "#111111",
    accent: "#a669a2",
    accentOver: "#dddddd",
    accentOver2: "#000000",
  }
  
type Attribute = {
    trait_type: string
    value: string
}

interface OraGlbViewerProps {
    onCanvasReady: any,
    contract: any,
    tokenId: any
}

let loadedNft:NftMetadata;


 function OraGlbViewer ( {
    onCanvasReady, 
    contract, 
    tokenId
    } : OraGlbViewerProps )
    {
    const { nft, loading, error, reload } = useNft(contract, tokenId)
    const reactCanvasBabylon = useRef(null);

    const onSceneReady = async (scene) => {
        // console.log("onSceneReady");
        const canvas = scene.getEngine().getRenderingCanvas();
        await AvatarBuilder.initialize(canvas, scene);
        prepareJsOra();
    };

    /**
     * Will run on every frame render.  We are spinning the box on y-axis.
     */
    const onRender = (scene) => {
    };   

    function prepareJsOra() {
            if ((window as any).jsora == null) {
                setTimeout(prepareJsOra, 50);
            }

            else {
                AvatarBuilder.initializeOraWithoutCanvas();
                renderNFT();
            }
    }
    
    let nftRendered = false;

    function renderNFT() {
        
        if (AvatarBuilder.isInitialized() && AvatarBuilder.oraLoaded())
        {
            if (loadedNft) {
                // console.log("loading nft");
                AvatarBuilder.loadNFT(loadedNft);
                nftRendered = true;
            }
        }

        // try again, ora or babylonjs might not be ready
        if (!nftRendered) {
            setTimeout(renderNFT, 50);
        }
    }

    // // wait for jsora to be loaded by the window
    // useEffect(() => {
    //     const waitForJsOra = async () => {
    //         if ((window as any).jsora == null) {
    //             setTimeout(waitForJsOra, 50);
    //         }

    //         else {
    //             await AvatarBuilder.initializeOraWithoutCanvas();
    //             renderNFT();
    //         }
    //     }

    //     setTimeout(waitForJsOra, 50);

    //     return () => {
    //     };
    // })    

    // wait for babylonjs scene to be ready
    useEffect(() => {
        const { current: canvas } = reactCanvasBabylon;

        if (!canvas) return;

        const engine = new Engine(canvas);
        const scene = new Scene(engine);
        if (scene.isReady()) {
            onSceneReady(scene);
        } else {
            scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
        }

        engine.runRenderLoop(() => {
            if (typeof onRender === "function") onRender(scene);
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        if (window) {
            window.addEventListener("resize", resize);
        }

        return () => {
            scene.getEngine().dispose();

            if (window) {
                window.removeEventListener("resize", resize);
            }
        };
    }, []);    

    return (
      <>
        <canvas height="280" width="280" ref={reactCanvasBabylon} />
        {(() => {
          if (loading) {
            return <NftLoading />
          }
          if (error) {
            return <NftError error={error} reload={reload} />
          }
          
          loadedNft = nft;

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

  return (
    <>
    {
    // 

    //   <div>
        
    //     {
    //       image && <img src={image} height="280" alt="" />
    //     }
    //     {
    //         (attributes as Array<Attribute>).map((attrib) => {
    //             return (
    //                 <p key={attrib.trait_type}>{attrib.value}</p>
                    
    //             )
    //         })
    //     }
    //   </div>
    }
    </>
  )
}

OraGlbViewer.displayName = "OraGlbViewer";

export default OraGlbViewer;