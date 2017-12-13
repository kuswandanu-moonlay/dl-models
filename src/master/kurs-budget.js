'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class KursBudget extends BaseModel {
    constructor(source) {
        super('kurs-budget', '1.0.0');

        // Define properties.  
        this.code = '';
        this.date = new Date();
        this.description = '';
        this.rate = 0;

        this.copy(source);
    }
};