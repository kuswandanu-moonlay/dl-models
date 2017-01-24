'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder = require("../../sales/production-order");
var Kanban = require("./kanban");
var Product = require("../../master/product");

module.exports = class DailyOperation extends BaseModel {
    constructor(source) {
        super('daily-operation', '1.0.0');

        // Define properties.
        this.salesContract = '';  
        this.productionOrder = new ProductionOrder();
        this.materialId = {};
        this.material = new Product();
        this.construction = '';
        this.color = '';
        this.colorTypeId = null;
        this.colorType = null;
        this.kanban = new Kanban();

        this.copy(source);
    }
};