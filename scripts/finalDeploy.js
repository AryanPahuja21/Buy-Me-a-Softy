const hre = require("hardhat");

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const softy = await hre.ethers.getContractFactory("softy");
  const contract = await softy.deploy();

  await contract.waitForDeployment();
  console.log("softy deployed to:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
