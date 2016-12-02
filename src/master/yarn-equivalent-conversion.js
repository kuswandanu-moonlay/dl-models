'use strict';

var BaseModel = require("capital-models").BaseModel;

module.exports = class YarnEquivalentConversion extends BaseModel {
    constructor(source) {
        super('yarn-equivalent-conversion', '1.0.0'); 

        this.ne=0;
        this.conversionRatio=0;

        this.copy(source);
    }
};