/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import dotenv from 'dotenv';
dotenv.config();
import {HardhatUserConfig} from 'hardhat/types';

const { ARCHIVE_URL, MNEMONIC } = process.env;

const accounts = {
  // derive accounts from mnemonic, see tasks/create-key
  mnemonic: MNEMONIC,
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
    { version: '0.6.0' }, 
    { version: '0.7.2' }
    ],
  },
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: ARCHIVE_URL,
      accounts,
    },
    hardhat: {
      /*accounts,
      forking: {
        url: ARCHIVE_URL // use archive for forking
      }*/
    },
  },
  mocha: {
    timeout: 300 * 1e3,
  }
};

export default config;