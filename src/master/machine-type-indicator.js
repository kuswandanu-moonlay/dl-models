'use strict';
var BaseModel = require('model-toolkit').BaseModel;
// var indicators = require('./machine-type');



module.exports = class MachineTypeIndicator extends BaseModel {
    constructor(source, type) {
        super(type || 'machine-type-indicators', '1.0.0');

        this.indicator = '';
        this.dataType = '';
        this.defaultValue = '';
        this.uom='';
        this.copy(source);
    }
};