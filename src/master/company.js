'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Company extends BaseModel {
    constructor(source) {
        super('company', '1.0.0');

        this.code = '';
        this.name = '';
        this.website = '';
        this.industry = '';
        this.phoneNumber = '';
        this.city = '';
        this.information = '';

        this.copy(source);
    }
};
