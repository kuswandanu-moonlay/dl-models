'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder = require("../../sales/production-order");
var Kanban = require("./kanban");
var Product = require("../../master/product");
var YarnMaterial = require("../../master/yarn-material");
var MaterialConstruction = require("../../master/material-construction");

module.exports = class DailyOperation extends BaseModel {
    constructor(source) {
        super('daily-operation', '1.0.0');

        // Define properties.
        this.salesContract = '';  
        this.productionOrderId = {};  
        this.productionOrder = new ProductionOrder();
        this.materialId = {};
        this.material = new Product();
        this.materialConstructionId={};
        this.materialConstruction=new MaterialConstruction();
        this.yarnMaterialId={};
        this.yarnMaterial=new YarnMaterial();
        this.color = '';
        this.colorTypeId = null;
        this.colorType = null;
        this.kanban = new Kanban();

        this.copy(source);
    }
};