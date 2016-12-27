'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Vat extends BaseModel {
    constructor(source) {
        super('vat', '1.0.0');

        // Define properties.   
        this.name = '';
        this.rate = 0;
        this.description = '';
        this.copy(source);
    }
};
