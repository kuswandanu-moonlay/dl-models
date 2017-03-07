'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Quality extends BaseModel {
    constructor(source) {
        super('quality', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';

        this.copy(source);
    }
};