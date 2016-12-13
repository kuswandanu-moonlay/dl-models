'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder=require('./production-order');

module.exports = class SalesContract extends BaseModel {
    constructor(source) {
        super('production-order', '1.0.0');

        this.salesContractNo='';
        this.date=new Date();
        this.productionOrders=[];

        this.copy(source);
        this.productionOrders = (this.productionOrders || []).map(productionOrder => new ProductionOrder(productionOrder));
    }
};