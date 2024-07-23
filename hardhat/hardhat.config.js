require("@nomicfoundation/hardhat-toolbox");
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-ignition-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
const privateKey = '232444fad6e778c2fbab3b00e7fe9fd690d9b1ea062563202e32a80176bebe4d';
module.exports = {
  solidity: "0.8.24",
  networks: {
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287,
      accounts: [privateKey],
    },
  }
};



