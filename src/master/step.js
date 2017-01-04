'use strict';

var BaseModel = require('capital-models').BaseModel;

module.exports = class Step extends BaseModel {
    constructor(source) {
        super('step', '1.0.0');
        
        // Define properties.
        this.process = '';
        this.itemMonitoring = []; 

        this.copy(source);
    }
};