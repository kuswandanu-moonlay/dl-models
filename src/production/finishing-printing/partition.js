'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Step = require("../../master/step");
var Machine = require("../../master/machine");

module.exports = class Partition extends BaseModel {
    constructor(source) {
        super('partition', '1.0.0');

        // Define properties.  
        this.code = '';
        this.no = '';
        this.shift = '';
        this.stepId = {};
        this.step = new Step();
        this.steps = [];
        this.machineId = {};
        this.machine = new Machine();
        this.dateInput = new Date();
        this.timeInput = 0;
        this.input = 0;
        this.dateOutput = new Date();
        this.timeOutput = 0;
        this.goodOutput = 0;
        this.badOutput = 0;
        this.badOutputDescription = '';

        this.copy(source);
    }
};
