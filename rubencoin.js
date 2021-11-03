var Sha256 = require('crypto-js/sha256');


class Block{
    constructor(index, timestamp, data, previoushash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = this.previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return Sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data).toString());
    }
}

class Blockchain{
    
}