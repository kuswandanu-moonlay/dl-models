'use strict';

var BaseModel = require('model-toolkit').BaseModel; 
var Step = require('./step');

module.exports = class Instruction extends BaseModel {
    constructor(source) {
        super('instruction', '1.0.0');

        this.code='';
        this.name='';
        this.steps = []; 

        this.copy(source);
        this.steps = (this.steps || []).map(step => new Step(step));
    }
};
