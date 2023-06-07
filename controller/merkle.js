const web3 = require('web3');
const { MerkleTree } = require('merkletreejs')

// Your whitelist from database
const whitelist = [
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
  '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
  '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
  '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
]

const keccak256 = web3.utils.keccak256;

let leaves = whitelist.map((addr) => web3.utils.keccak256(addr))

const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })

const merkleRootHash = merkleTree.getHexRoot()

console.log(merkleRootHash);
