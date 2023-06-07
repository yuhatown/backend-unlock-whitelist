const web3 = require('web3');
const { MerkleTree } = require('merkletreejs')


async function generateMerkleTree() {

  const whitelist = await Users.findAll()
  .then((users) => {
      console.log(users)
  });

  const keccak256 = web3.utils.keccak256;
  let leaves = whitelist.map((addr) => web3.utils.keccak256(addr))
  const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
  const merkleRootHash = merkleTree.getHexRoot()

  console.log(merkleRootHash);


  return merkleRootHash;
}

module.exports = { generateMerkleTree };
