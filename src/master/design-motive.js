'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class DesignMotive extends BaseModel {
    constructor(source) {
        super('design-motive', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';

        this.copy(source);
    }
};