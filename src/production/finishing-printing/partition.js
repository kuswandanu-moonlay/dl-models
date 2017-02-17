'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require("../../master/uom");

module.exports = class Partition extends BaseModel {
    constructor(source) {
        super('partition', '1.0.0');

        // Define properties.  
        this.code = '';
        this.no = '';
        this.lengthFabric = 0;
        this.uomId = {};
        this.uom = new Uom();
        this.reference = '';

        this.copy(source);
    }
};
