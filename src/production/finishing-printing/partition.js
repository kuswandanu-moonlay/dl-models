'use strict';
var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class Partition extends BaseModel {
    constructor(source) {
        super('partition', '1.0.0');
        this.no = 0;
        this.total = 0;
        this.

        this.copy(source);
    }
};
