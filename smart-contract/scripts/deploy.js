// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Conciousness = await hre.ethers.getContractFactory("Consciousness");
  const conciousness = await Conciousness.deploy("0x61B52B719BE103efF87993a6c01876451dA103C0");

  await conciousness.deployed();

  console.log(
    `Conciousness deployed to ${conciousness.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
