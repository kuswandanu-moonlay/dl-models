'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Comodity extends BaseModel {
    constructor(source) {
        super('comodity', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.type = '';

        this.copy(source);
    }
};