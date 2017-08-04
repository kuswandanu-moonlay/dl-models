'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Company = require('./company');

module.exports = class Contact extends BaseModel {
    constructor(source) {
        super('company', '1.0.0');

        this.code = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = '';
        this.companyId = {};
        this.company = new Company();
        this.jobTitle = '';
        this.information = '';

        this.copy(source);
    }
};
