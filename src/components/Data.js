import { ethers } from "ethers";

const Data = ({ maxSupply, totalSupply, cost, balance }) => {
	return (
		<div className="text-center">
			<p>
				<strong>Avaialbe to Mine:</strong>
				{maxSupply - totalSupply}
			</p>
			<p>
				<strong>Cost to Mint:</strong>
				{ethers.utils.formatUnits(cost, "ether")} ETH
			</p>
			<p>
				<strong>You own:</strong>
				{balance.toString()} ETH
			</p>
		</div>
	);
};

export default Data;
