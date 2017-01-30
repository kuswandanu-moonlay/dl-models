'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Instruction = require("../../master/instruction");
var Partition = require("./partition");

module.exports = class Kanban extends BaseModel {
    constructor(source) {
        super('kanban', '1.0.0');

        // Define properties.  
        this.instructionId = {};
        this.instruction = new Instruction();
        this.partitions = [];

        this.copy(source);
        this.partitions = (this.partitions || []).map(partition => new Partition(partition));
    }
};
