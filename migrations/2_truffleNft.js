const Contract = artifacts.require("TruffleNFT");

module.exports = function (deployer) {
  deployer.deploy(Contract);
};