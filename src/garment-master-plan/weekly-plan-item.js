'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class WeeklyPlanItem extends BaseModel {
    constructor(source, type) {
        super(type || 'weekly-plan-item', '1.0.0');

        this.weekNumber = {};
        this.startDate = new Date();
        this.endDate = new Date();
        this.month = 0;
        this.copy(source);
    }
};