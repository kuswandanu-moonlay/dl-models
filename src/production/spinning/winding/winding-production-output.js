'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Machine = require('../../../master/machine');
var Product = require('../../../master/product');
var Unit = require('../../../master/unit');
//var LotMachine = require('../../../master/lot-machine');
var ThreadSpecification = require('../../../master/thread-specification');

module.exports = class WindingProductionOutput extends BaseModel {
    constructor(source) {
        super('winding-production-output', '1.0.0');

        this.unitId={};
        this.unit=new Unit();
        this.date=new Date();
        this.shift='';
        this.machineId={};
        this.machine=new Machine();
        this.productId={};
        this.product=new Product();
        //this.lotMachineId={};
        //this.lotMachine=new LotMachine();
        this.threadSpecificationId={};
        this.threadSpecification=new ThreadSpecification();
        this.threadWeight=1.89;
        this.goodCone=0;
        this.badCone=0;
        this.drum=0;

        this.copy(source);
    }
};