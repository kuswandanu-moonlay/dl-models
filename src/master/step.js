'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Step extends BaseModel {
    constructor(source) {
        super('step', '1.0.0');
        
        // Define properties.
        this.process = '';
        this.itemMonitoring = []; 

        this.copy(source);
    }
};