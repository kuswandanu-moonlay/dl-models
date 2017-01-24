'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require('./uom');


module.exports = class MachineSpesificationStandard extends BaseModel {
    constructor(source) {
        super('machine-spesification-standard', '1.0.0');

        this.code = '';
        this.valueName = '';
        this.uomId = {};
        this.uom = new Uom();

        this.copy(source);
    }
};