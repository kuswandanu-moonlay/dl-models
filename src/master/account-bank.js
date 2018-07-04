'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Currency = require('./currency');

module.exports = class AccountBank extends BaseModel {
    constructor(source) {
        super('account-bank', '1.0.0');

        // Define properties.  
        this.code = '';
        this.bankName = '';
        this.bankCode = '';
        this.accountCOA = '';
        this.bankAddress = '';
        this.accountName = '';
        this.accountNumber = '';
        this.swiftCode = '';
        this.currencyId={};
        this.currency = new Currency();

        this.copy(source);
    }
};