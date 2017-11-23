'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class WorkingHoursStandard extends BaseModel {
    constructor(source) {
        super('working-hours-standard', '1.0.0');

        // Define properties.   
        this.code='';
        this.color = '';
        this.start = 0;
        this.end = 0;
        this.remark = '';
        this.copy(source);
    }
};
