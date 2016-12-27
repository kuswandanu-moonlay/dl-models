'use strict'; 
var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('../../master/unit');

module.exports = class DailyOperation extends BaseModel {
    constructor(source) {
        super('daily-operation', '1.0.0');
        this.productionOrderId = {};
        this.productionOrder = {};
        this.kanban = []

        this.copy(source);
    } 
};