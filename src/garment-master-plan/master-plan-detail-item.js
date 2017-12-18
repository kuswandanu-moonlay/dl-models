'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('../master/unit');
var Week = require('./weekly-plan-item');

module.exports = class MasterPlanDetailItem extends BaseModel {
    constructor(source, type) {
        super(type || 'master-plan-detail-item', '1.0.0');
        
        this.shCutting=0;
        this.shSewing=0;
        this.shFinishing=0;
        this.unitId={};
        this.unit=new Unit();
        this.weeklyPlanId={};
        this.weeklyPlanYear=1980;
        this.week=new Week();
        this.quantity=0;
        this.remark='';

        this.copy(source);
    }
};