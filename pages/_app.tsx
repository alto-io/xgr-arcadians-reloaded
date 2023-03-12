import '../styles/globals.css';
import Script from 'next/script';

import type { AppProps } from 'next/app';

import type { NftMetadata } from "use-nft"

import { providers } from "ethers"
import { NftProvider, FetcherDeclarationEthers } from "use-nft"

const INFURA_KEY = process.env.VITE_INFURA_KEY

const fetcher: FetcherDeclarationEthers = [
  "ethers",
  { provider: new providers.InfuraProvider("homestead", INFURA_KEY) },
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NftProvider
      fetcher={fetcher}
    >
    <Script src="/lib/jsora.min.js"></Script>
    <Script src="/lib/lodash.min.js"></Script>
    <Component {...pageProps} />
    </NftProvider>    
  );
}
