'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder = require('../../sales/production-order');
var Instruction = require('../../master/instruction');
var Cart = require('./cart');

module.exports = class Kanban extends BaseModel {
    constructor(source) {
        super('kanban', '1.0.0');

        // Define properties.  
        this.productionOrderId = {};
        this.productionOrder = new ProductionOrder();
        this.selectedProductionOrderDetail = new ProductionOrderDetail();
        this.cart = new Cart();
        this.instructionId = {};
        this.instruction = new Instruction();

        this.copy(source);
        this.steps = (this.steps || []).map(step => new Step(step));
    }
};
