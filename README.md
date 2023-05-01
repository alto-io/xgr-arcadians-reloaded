## What is it?

An [XGR](https://github.com/alto-io/cross-game-renderer) renderer implementation for the [Arcadians: Reloaded](https://arcadians.io/) collection. Uses the [Open Raster Format](https://gitlab.com/inklabapp/jsora)
 (.ora) for image layers and [GL Transmission File](https://learn.microsoft.com/en-us/windows/mixed-reality/distribute/creating-3d-models-for-use-in-the-windows-mixed-reality-home) (.gltf) for animation.

## Creating your own Renderer

To create your own renderer implementation, fork this repo. Afterwards, run the development server:

`yarn dev`

The next step is to deploy renderer.json to a **renderer_url.**

Adding this forked repository to Vercel as a project should do this, similar to how this project uses Vercel to deploy to [https://xgr-arcadians.vercel.app/renderer.json](https://xgr-arcadians.vercel.app/renderer.json)

## Update renderer.json

Update the values in [public/renderer.json](public/renderer.json) to reflect your own collection’s details. 

The **name**, **description**, **project_url**, **image**, and **animation_url** fields are required. The **image** and **animation_url** works similarly to how they are used in marketplaces such as Opensea, and will be appended with a tokenid.

## Rendering Code

The starting point for the rendering code is in the [pages/image](pages/image) and [pages/animation](pages/animation) directories. Both make use of the [avatar directory](avatar) code.

Don’t hesitate to simply use the default ORA and GLTF implementation. This is actually encouraged as this will make your NFT compatible with other collections that use a similar implementation. 

Otherwise, feel free to edit the above code and implement your own rendering. The standard is flexible, the important part for the collection to render on the [XGR Homepage](https://xgr.opgames.org/) is that **renderer_url** serves the correct **image** and **animation_url**. 

## Adding Collection to XGR Homepage

Once done, add your collection to the XGR Homepage to see it rendered alongside other XGR-enabled projects. More details can be found [here](https://github.com/alto-io/cross-game-renderer#adding-collections).

## Related Projects

- [arcadians-avatar-builder](https://github.com/alto-io/arcadians-avatar-builder) - an avatar customization example using the same rendering implementation as xgr-arcadians. Useful for testing your own ORA and GLTF files

---

### Collection and Contract Details

Listed below for quick reference:

**renderer_url**

- [https://xgr-arcadians.opgames.org/renderer.json](https://xgr-arcadians.opgames.org/renderer.json)
- /**********image**********
    - example: [https://xgr-arcadians.opgames.org/image/2345](https://xgr-arcadians.opgames.org/image/2345)
- /**animation_url**
    - example: [https://xgr-arcadians.opgames.org/animation/2345](https://xgr-arcadians.opgames.org/animation/2345)

**Arcadians Smart Contract Details**

- ERC-721
- Address: Ethereum Mainnet: [0xc3c8a1e1ce5386258176400541922c414e1b35fd](https://etherscan.io/token/0xc3c8a1e1ce5386258176400541922c414e1b35fd#code)