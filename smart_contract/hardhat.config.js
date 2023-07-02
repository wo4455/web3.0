require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/uOWq7kzhgW8zY4sxhb_oO6Lp1RL-EEzE',
      accounts: [ '5d54f52bb2548420fd71b9a1c92cd9408d21479e481240d48f922dd659370fdb' ]
    }
  }
}