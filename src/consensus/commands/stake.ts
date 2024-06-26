import { ethers } from 'ethers';
import { consensus, CONSENSUS_ABI } from './../../config/contracts';
import { provider } from './../../config/provider';

async function stakeCoins(privateKey: string): Promise<string> {
    const wallet = new ethers.Wallet(privateKey, provider);

    const contract = new ethers.Contract(consensus, CONSENSUS_ABI, wallet);

    // Staking 10000 coins
    const amountToStake = ethers.parseEther('10000');
    const transaction = await contract.stake({
        value: amountToStake
    });

    await transaction.wait();

    return transaction.hash;
}

export { stakeCoins };
