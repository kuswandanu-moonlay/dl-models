'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Buyer extends BaseModel {
    constructor(source) {
        super('buyer', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.address = '';
        this.country = '';
        this.contact = '';
        this.tempo = '';
        this.type='';

        this.copy(source);
    }
};
