import { ethers } from "ethers";
import conciousabi from './Consciousness.json'
import premium from './Premium.json'

 export const conciousness = "0x5AcC5C86091322CFE00Fa667Ffc18f67f88791ec"
 export const Premium = "0x61B52B719BE103efF87993a6c01876451dA103C0"

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