'use strict';


var BaseModel = require('model-toolkit').BaseModel;

module.exports = class AccountBank extends BaseModel {
    constructor(source) {
        super('account-bank', '1.0.0');

        // Define properties.  
        this.code = '';
        this.bankName = '';
        this.bankAddress = '';
        this.accountName = '';
        this.accountNumber = '';
        this.swiftCode = '';

        this.copy(source);
    }
};