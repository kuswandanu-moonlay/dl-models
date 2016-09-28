'use strict'

var BaseModel = require('capital-models').BaseModel;
var Profile = require('./profile');

module.exports = class Account extends BaseModel {
    constructor(source) {
        super('account', '1.0.0');

        // Define properties.  
        this.username = '';
        this.password = '';
        this.isLocked = false;
        this.profile = new Profile();
        this.roles = [];

        this.copy(source);
    }
}