'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Unit extends BaseModel {
    constructor(source) {
        super('unit', '1.0.0');

        // Define properties.  
        this.code = '';
        this.division = '';
        this.subdivision = ''; 
        this.description='';

        this.copy(source);
    }
}