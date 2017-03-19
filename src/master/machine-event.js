'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class MachineEvent extends BaseModel {
    constructor(source) {
        super('machine-event', '1.0.0');

        // Define properties
        this.code = '';
        this.no = '';
        this.name = '';
        this.category = '';

        this.copy(source);
    }
};