'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Profile extends BaseModel {
    constructor(source) {
        super('profile', '1.0.0');
 
        // Define properties.  
        this.firstname = '';
        this.lastname = '';
        this.gender = '';
        this.dob = new Date();
        this.email = '';
        this.copy(source);
    }
}