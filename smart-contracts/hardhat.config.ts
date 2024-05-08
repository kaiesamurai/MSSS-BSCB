import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Configure env variables
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    hardhat: {
      loggingEnabled: false,
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      accounts:  [process.env.WALLET_KEY as string],
      gasPrice: 20000000000,
    },
    polygonAmoy: {
      chainId: 80002,
      url: process.env.ALCHEMY_API_URL as string,
      forking: {
        url: process.env.ALCHEMY_API_URL as string,
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER as string],
    },
  },
};

export default config;
