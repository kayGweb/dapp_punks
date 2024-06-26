// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
	const NAME = "dapp_punks";
	const SYMBOL = "DP";
	const MAX_SUPPLY = 25;
	const BASE_URI = "ipfs://QmQ2jnDYecFhrf3asEWjyjZRX1pZSsNWG3qHzmNDvXa9qg/";
	const COST = ethers.utils.parseUnits("10", "ether");
	const NFT_MINT_DATE = (Date.now() + 60000).toString().slice(0, 10);

	// Deploy Token
	const NFT = await hre.ethers.getContractFactory("NFT");
	let nft = await NFT.deploy(NAME, SYMBOL, COST, MAX_SUPPLY, NFT_MINT_DATE, BASE_URI);

	await nft.deployed();
	console.log(`Token deployed to: ${nft.address}\n`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
