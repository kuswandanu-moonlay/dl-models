'use strict';
var BaseModel = require('model-toolkit').BaseModel;


module.exports = class Style extends BaseModel {
    constructor(source, type) {
        super(type || 'style', '1.0.0');
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.copy(source);
    }
};