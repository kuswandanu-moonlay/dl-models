'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class MachineType extends BaseModel {
    constructor(source, type) {
        super(type || 'machine-type', '1.0.0');

        //Define properties
        this.code = '';
        this.name = '';
        this.description = '';
        this.indicator = [];
        this.copy(source);
    }
};
