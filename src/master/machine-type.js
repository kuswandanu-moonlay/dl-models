'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var MachineTypeIndicator = require('./machine-type-indicator');

module.exports = class MachineType extends BaseModel {
    constructor(source, type) {
        super(type || 'machine-type', '1.0.0');

        //Define properties
        this.code = '';
        this.name = '';
        this.description = '';
        this.indicators = [];

        this.copy(source);

        this.indicators = (this.indicators || []).map(indicators => new MachineTypeIndicator(indicators));;
    }
};
