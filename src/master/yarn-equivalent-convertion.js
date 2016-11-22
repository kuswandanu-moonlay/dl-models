'use strict'

var BaseModel = require("capital-models").BaseModel;

module.exports = class YarnEquivalentConvertion extends BaseModel {
    constructor(source) {
        super('yarn-equivalent-convertion', '1.0.0'); 

        this.ne=0;
        this.convertionRatio=0;

        this.copy(source);
    }
}