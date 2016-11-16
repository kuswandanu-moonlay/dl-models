'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class SpinningProductionOutput extends BaseModel {
    constructor(source) {
        super('spinning-production-output', '1.0.0');

        this.spinning='';
        this.date=new Date();
        this.shift='';
        this.machineId={};
        this.machine=new Machine();
        this.threadId={};
        this.thread=new Product();
    }
}