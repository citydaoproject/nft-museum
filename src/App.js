import './App.css';
import NFT from './NFT.js';
import { NftGallery } from 'react-nft-gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>CityDAO Museum</h2>
        <NftGallery ownerAddress="daocity.eth" darkMode={true} />
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
