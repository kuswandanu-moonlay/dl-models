'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class LampStandard extends BaseModel {
    constructor(source) {
        super('lamp-standard', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';  
        this.description='';

        this.copy(source);
    }
};