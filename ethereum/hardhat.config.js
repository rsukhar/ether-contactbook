require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/5ac40c6cdf224c86815b53e702e37eaf",
      accounts: ["5e86fed9fcee0fd9382e1a4e59680b0386c149ede4cb80d604bdd6e4a13eee5c"]
    }
  }
};
