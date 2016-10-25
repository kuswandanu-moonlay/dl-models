'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Budget extends BaseModel {
    constructor(source) {
        super('budget', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}