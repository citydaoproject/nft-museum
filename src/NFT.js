import { NftGallery } from 'react-nft-gallery';

function NFT({collection, item, curator, description}) {
    return (
        <div style={{display: "flex", margin: "50px"}}>
        <div style={{width: "500px"}}>
        <NftGallery isInline={true} ownerAddress="daocity.eth" hasLightbox={false} darkMode={true} showcaseMode={true} showcaseItemIds={[`${collection}/${item}`]}/>
        </div>
        <div style={{width: "500px"}}>
        <p style={{textAlign: "left", float: "left", margin:"30px"}}>Curator: {curator} <br/> <br/> City Watcher is a piece from the </p>
        </div>
        </div>
    )
}

export default NFT;