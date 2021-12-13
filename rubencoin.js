const Sha256 = require('crypto-js/sha256');

class Transaction{
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toaddress = this.toaddress;
        this.amount = amount;
    }
}


class Block{
    constructor(index, timestamp, data, previoushash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = this.previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash() {
        return Sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.non++;
            this.hash = this.calculateHash();
        }
    }
}
    

class Blockchain{
    constructor() {
        this.chain = [this.createGensasisBlock()];
        this.difficulty = 5;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
    createGenesisBlock() {
        return new Block("01/01/2017", "Genasis block", "0");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.previous = this.getlastestBlock().hash;
        this.chain.push(newBlock);
    }
    isChainValid() {
        for (let i = 1; 1 < this.chain.length; 1++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock) {
                return false;
            }
        }
        
        return true;
    }
}


let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1, "10/07/2017", { amount: 4 })); 
savjeeCoin.addBlock(new Block(2, "12/07/2017", { amount: 10 }));
savjeeCoin.chain[1].data = { amount: 100 };
savjeeCoin.chain[1].hash = savjeeCoin.chain.[1].calculateHash();
//consol.log('Is blockchain valid?')
//console.log(JSON.stringify(rubenCOin, null, 4));