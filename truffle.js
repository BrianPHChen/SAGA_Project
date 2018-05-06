var env = require("./env.js");
var WalletProvider = require("truffle-wallet-provider");
var Wallet = require('ethereumjs-wallet');
var rinkebyPrivateKey = new Buffer(env.RINKEBY_PRIVATE_KEY, "hex");
var rinkebyWallet = Wallet.fromPrivateKey(rinkebyPrivateKey);
console.log(rinkebyWallet.getAddress());
var rinkebyProvider = new WalletProvider(rinkebyWallet, env.RINKEBY_HTTP_PROVIDER);
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4700000
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 4
    },
  }
};