'use strict';
var BaseModel = require('capital-models').BaseModel;

module.exports = class StandardQualityTestPercentage extends BaseModel {
    constructor(source, type) {
        super('quality-standard', '1.0.0');

        this.shrinkage = 0;
        this.wetRubbing = 0;
        this.dryRubbing = 0;
        this.washing = 0;
        this.darkPrespiration = 0;
        this.lightMedPrespiration = 0;
        
        this.copy(source);
    }
};