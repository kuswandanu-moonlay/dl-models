'use strict';

var BaseModel = require('capital-models').BaseModel;

module.exports = class Category extends BaseModel {
    constructor(source) {
        super('category', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.codeRequirement = '';  

        this.copy(source);
    }
};