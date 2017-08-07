'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Machine = require('./machine');

module.exports = class BadOutputReason extends BaseModel {
    constructor(source) {
        super('bad-output-reason', '1.0.0');

        // Define properties.  
        this.code = '';
        this.reason = '';
        this.machines = [];

        this.copy(source);
        this.machines = (this.machines || []).map(machine => new Machine(machine));
    }
};