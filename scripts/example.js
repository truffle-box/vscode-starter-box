const TruffleNFT = artifacts.require('TruffleNFT');

module.exports = async (callback) => {
  try {
    const nft = await TruffleNFT.deployed();
    // console.log(result);
    
  } catch(err) {
    console.log('Doh', err.message);
  }
  callback();
};