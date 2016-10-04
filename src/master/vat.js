'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Vat extends BaseModel {
    constructor(source) {
        super('vat', '1.0.0');

        // Define properties.   
        this.name = '';
        this.rate = 1;
        this.description = '';
        this.copy(source);
    }
}