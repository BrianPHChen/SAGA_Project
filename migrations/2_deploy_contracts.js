var SAGAToken = artifacts.require("./SAGAToken.sol");
var SAGAcrowdSale = artifacts.require("./SAGAcrowdSale.sol");

module.exports = function(deployer) {
  deployer.deploy(SAGAToken).then(() => {
  	deployer.deploy(SAGAcrowdSale, SAGAToken.address);
  });
};
