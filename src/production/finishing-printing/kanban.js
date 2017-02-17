'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder = require('../../sales/production-order');
var Step = require('../../master/step');
var Instruction = require('../../master/instruction');
var Partition = require('./partition');

module.exports = class Kanban extends BaseModel {
    constructor(source) {
        super('kanban', '1.0.0');

        // Define properties.  
        this.productionOrderId = {};
        this.productionOrder = new ProductionOrder();
        this.color = '';
        this.colorTypeId = null;
        this.colorType = null;
        this.grade = '';
        this.lengthFabric = 0;
        this.partitions = [];
        this.instructionId = {};
        this.instruction = new Instruction();
        this.steps = [];

        this.copy(source);
        this.partitions = (this.partitions || []).map(partition => new Partition(partition));
        this.steps = (this.steps || []).map(step => new Step(step));
    }
};
