import Head from "next/head";
import {
  Header,
  Heroheader,
  Welcome,
  Works,
  Footer,
  Team,
} from "../components";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>
            AdzVera: Marketing, Collab Manager, Art Desingers, Developers and
            more
          </title>
          <meta
            name="description"
            content="AdzVera: Marketing, Collab Manager, Art Desingers, Developers and more"
          />
          <meta property="og:title" content="AdzVera" />
          <meta
            name="description"
            content="AdzVera: Marketing, Collab Manager, Art Desingers, Developers and
            more"
          />
          <meta
            name="keywords"
            content="nft, adzvera, collabs, minting, shib, eth, btc, usdt, sol marketing, growth, promotion, listing, adzverainc, moderators, developers, web3, blockchain, thirdweb, adzveramarketingservice, p2p, trust wallet, binance, nfts, tether, bitcoin, ethereum, solana, shiba inu, grow your nft, best nft, earn with us, get hired, hiring, promote, market, blockchain developer, get your minting page, adzveraagency, marketingagency, nft marketing, nft marketing agency, marketing service agency, metamask, jsmastery, codewitharry, sunder pichhai, dogecoin, crypto, elonmusk, fiverr, freelancing, development, nextjs, react, nftdesign"
          />
          <meta property="og:url" content="/" />
          <meta
            property="og:description"
            content="AdzVera: Marketing, Collab Manager, Art Desingers, Developers and
            more"
          />
          <meta property="og:image" content="/color-logo.png" />

          <meta name="robots" content="all" />
        </Head>
      </div>

      <div>
        <Header />
        <Heroheader />
        <Welcome />
        <Works />
        <Team />

        <Footer />
      </div>
    </div>
  );
}
