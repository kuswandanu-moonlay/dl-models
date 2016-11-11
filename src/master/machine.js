'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Machine extends BaseModel {
    constructor(source) {
        super('machine', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.unit = '';
        this.process = '';
        this.manufacture = '';
        this.year = 1900;
        this.machineCondition = '';

        this.copy(source);
    }
}