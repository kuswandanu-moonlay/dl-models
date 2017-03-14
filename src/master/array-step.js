'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Step = require('./step');

module.exports = class ArrayStep extends BaseModel {
    constructor(source) {
        super('array-step', '1.0.0');

        // Define properties.  
        this.stepId = '';
        this.step = new Step();

        this.copy(source);
    }
};