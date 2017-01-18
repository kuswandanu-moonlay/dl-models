'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder = require("./production-order");
var Kanban = require("./kanban");
var Product = require("../../master/product");
var ColorType = require("../../master/color-type");

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
        this.colorTypeId = {};
        this.colorType = new ColorType();
        this.kanban = new Kanban();

        this.copy(source);
    }
};