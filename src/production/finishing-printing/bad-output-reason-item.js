'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var BadOutputReason = require("../../master/bad-output-reason");
var Machine = require("../../master/machine");

module.exports = class BadOutputReasonItem extends BaseModel {
    constructor(source) {
        super('bad-output-reason-item', '1.0.0');

        // Define properties.

        this.length = 0;
        this.action = '';
        this.description = '';
        this.badOutputReasonId = {};
        this.badOutputReason = new BadOutputReason();
        this.machineId={};
        this.machine= new Machine();
        this.copy(source);
    }
};