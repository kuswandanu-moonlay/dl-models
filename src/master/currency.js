'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Currency extends BaseModel {
    constructor(source) {
        super('currency', '1.0.0');

        // Define properties.  
        this.code = '';
        this.symbol = '';
        this.rate = 1;  
        this.description='';

        this.copy(source);
    }
};