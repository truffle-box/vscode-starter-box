const TruffleNFT = artifacts.require("TruffleNFT");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TruffleNFT", function (/* accounts */) {
  it("should be deployed", async function () {
    await TruffleNFT.deployed();
    return assert.isTrue(true);
  });
});
