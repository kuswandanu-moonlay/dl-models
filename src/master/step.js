'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var StepIndicator = require('./step-indicator');

module.exports = class Step extends BaseModel {
    constructor(source) {
        super('step', '1.0.0');

        // Define properties.
        this.process = '';
        this.alias = '';
        // this.itemMonitoring = [];
        this.stepIndicators = [];

        this.copy(source);
        this.stepIndicators = (this.stepIndicators || []).map(stepIndicator => new StepIndicator(stepIndicator));
    }
};