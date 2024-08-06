const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance: ${await getBalances(address)}`);
    counter++;
  }
}

async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log(`Memo from ${name} (${from}) at ${timestamp}: ${message}`);
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const softy = await hre.ethers.getContractFactory("softy");
  const contract = await softy.deploy();

  await contract.waitForDeployment();
  console.log("softy deployed to:", contract.target);

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before buying softy");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.parseEther("1") };
  await contract.connect(from1).buy("from1", "Very tasty", amount);
  await contract.connect(from2).buy("from2", "Very good", amount);
  await contract.connect(from3).buy("from3", "Very nice", amount);

  console.log("After buying softy");
  await consoleBalances(addresses);

  const memos = await contract.getMemos();
  consoleMemos(memos);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
