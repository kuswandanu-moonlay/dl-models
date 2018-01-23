'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class WeeklyPlanItem extends BaseModel {
    constructor(source, type) {
        super(type || 'weekly-plan-item', '1.0.0');

        this.weekNumber = 0;
        this.startDate = new Date();
        this.endDate = new Date();
        this.month = 0;
        this.efficiency = 0;
        this.operator = 0;
        this.AH = 0;
        this.ahTotal = 0;
        this.availableAH = 0;
        this.usedAH = 0;
        this.copy(source);
    }
};