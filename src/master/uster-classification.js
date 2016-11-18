'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class UsterClassification extends BaseModel {
    constructor(source) {
        super('uster-classification', '1.0.0');

        // Define properties
        this.thin = 0;
        this.thick = 0;
        this.neps = 0;
        this.ipi = 0
        this.grade = '';

        this.copy(source);
    }
}