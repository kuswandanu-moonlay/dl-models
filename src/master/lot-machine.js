'use strict'

var BaseModel = require("capital-models").BaseModel;
var Product = require('../master/product');

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
    }
}