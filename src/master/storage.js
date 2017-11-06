'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var unit = require('./unit');

module.exports = class Storage extends BaseModel {
    constructor(source) {
        super('storage', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = ''; 
        this.description ="";
        this.unitId={};
        this.unit= new unit;

        this.copy(source);
    }
};
