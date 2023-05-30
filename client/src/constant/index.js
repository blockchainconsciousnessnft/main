import { ethers } from "ethers";
import conciousabi from './Consciousness.json'
import premium from './Premium.json'

 export const conciousness = "0x96Bc006F5459DB4700F3f0e6aDE05E10aE93e7a0"
 export const Premium = "0x31c84656D0A3F885CF7065A643BF19699D220C41"

 const conciousABI = conciousabi.abi
 const premiumABI  = premium.abi

  function connectWithContract() {
    // Creating a new web3 provider with window.ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    // Getting the signer
    const signer = provider.getSigner();
  
    // Creating a new contract factory with the signer, address and ABI
    const contract = new ethers.Contract(conciousness, conciousABI, signer);
  
    return contract;
  }

   function connectWithPremiumContract() {
    // Creating a new web3 provider with window.ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    // Getting the signer
    const signer = provider.getSigner();
  
    // Creating a new contract factory with the signer, address and ABI
    const contract = new ethers.Contract(Premium, premiumABI, signer);
  
    return contract;
  }

  export {
    connectWithContract,
    connectWithPremiumContract
  }