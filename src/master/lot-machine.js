'use strict';

var BaseModel = require("model-toolkit").BaseModel;
var Product = require('./product');
var Machine = require('./machine');

module.exports = class LotMachine extends BaseModel {
    constructor(source) {
        super('lot-machine', '1.0.0'); 

        this.product= new Product();
        this.productId={};
        this.lot='';
        this.rpm=0;
        this.machine=new Machine();
        this.machineId={};
        this.ne=0;
        this.constant=0;

        this.copy(source);
        this.machine=new Machine(this.machine);
    }
};