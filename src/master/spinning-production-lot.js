'use strict';

var BaseModel = require("model-toolkit").BaseModel;
// var Product = require('./product');
var Machine = require('./machine');
var SpinningYarn = require('./spinning-yarn');
var Unit = require('./unit');

module.exports = class SpinningProductionLot extends BaseModel {
    constructor(source) {
        super('spinning-lot-production', '1.0.0');

        // this.product= new Product();
        // this.productId={};
        this.lot='';
        this.rpm=0;
        this.machine=new Machine();
        this.machineId={};
        this.ne=0;
        this.constant=0;
        this.spinningYarn= new SpinningYarn();
        this.spinningYarnId={};
        this.unit= new Unit();
        this.unitId={};

        this.copy(source);
    }
};