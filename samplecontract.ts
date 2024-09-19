import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = 1_000_000_000n;

const samplecontractModule = buildModule("SampleContractModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const samplecontract = m.contract("samplecontract", [unlockTime], {
    value: lockedAmount,
  });

  return { samplecontract };
});

export default samplecontractModule;

/*import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import "@nomicfoundation/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import LockModule from "./modules/Lock";
//import samplecontractModule from "./modules/samplecontract";
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const contract = await HelloWorld.deploy();

  console.log("Contract deployed at:", contract.address);

  const saySomething = await contract.speak();

  console.log("saySomething value:", saySomething);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export default LockModule;
//export default samplecontractModule;*/
