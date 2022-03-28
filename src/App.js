import "./App.css";
import NFT from "./NFT.js";
import { NftGallery } from "react-nft-gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Art Museum of CityDAO</h2>
        <p>
          Curated by CityDAO citizen{" "}
          <a href="https://twitter.com/getprsm">Casey</a>. <br />
          <span className="Donate"> Donations accepted to daocity.eth</span>
        </p>
        <NftGallery
          ownerAddress="daocity.eth"
          darkMode={true}
          isProxyApi={true}
          apiUrl={process.env.REACT_APP_OPENSEA_API_URL}
          autoRetry={true}
        />
        {/* <NFT 
        collection={"0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63"}
        item={"501"}
        curator={"casey.eth"}
        description={""}/>
          <NFT 
        collection={"0x448f3219cf2a23b0527a7a0158e7264b87f635db"}
        item={"758"}
        curator={""}
        description={""}/> */}
      </header>
    </div>
  );
}

export default App;
