'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var division = require('./division');

module.exports = class Holiday extends BaseModel {
    constructor(source, type) {
        super(type || 'holiday', '1.0.0');

        //Define properties
        this.code = '';
        this.date = new Date();
        this.name = '';
        this.divisionId = {};
        this.division = new division();
        this.description = '';
        
        this.copy(source);
    }
};
