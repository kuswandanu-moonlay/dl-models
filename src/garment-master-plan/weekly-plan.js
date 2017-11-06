'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('../master/unit');
var Week = require('./weekly-plan-item');


module.exports = class WeeklyPlan extends BaseModel {
    constructor(source, type) {
        super(type || 'weekly-plan', '1.0.0');
        this.year = 1900;
        this.items = [];
        this.copy(source);
        this.items = (this.items || []).map(week => new Week(week));
    }
};
