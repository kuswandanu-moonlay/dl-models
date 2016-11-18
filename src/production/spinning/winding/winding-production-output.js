'use strict'

var BaseModel = require('capital-models').BaseModel;
var Machine = require('../../../master/machine');
var Product = require('../../../master/product');

module.exports = class WindingProductionOutput extends BaseModel {
    constructor(source) {
        super('winding-production-output', '1.0.0');

        this.spinning='';
        this.threadName='';
        this.date=new Date();
        this.shift='';
        this.machineId={};
        this.machine=new Machine();
        this.productId={};
        this.product=new Product();
        this.threadWeight=1.89;
        this.goodCone=0;
        this.badCone=0;
        this.drum=0;

        this.copy(source);
    }
}