'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('./unit');
var Step = require('./step');

module.exports = class Machine extends BaseModel {
    constructor(source) {
        super('machine', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.unitId = {};
        this.unit = new Unit();
        this.stepId = {};
        this.step = new Step();
        this.process = '';
        this.manufacture = '';
        this.year = 1900;
        this.condition = '';

        this.copy(source);
        this.unit = new Unit(this.unit);
    }
};