'use strict';
var BaseModel = require('model-toolkit').BaseModel;


module.exports = class Comodity extends BaseModel {
    constructor(source, type) {
        super(type || 'comodity', '1.0.0');
        this.code = '';
        this.name = '';
        
        this.copy(source);
    }
};