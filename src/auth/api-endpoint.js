'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class ApiEndpoint extends BaseModel {
    constructor(source) {
        super('api-endpoint', '1.0.0');

        // Define properties.  
        this.name = '';
        this.method = '';
        this.uri = '';
        this.isLocked = false;
        this.roles = []; 

        this.copy(source);
    }
};