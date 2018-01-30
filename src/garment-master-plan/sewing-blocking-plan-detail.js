'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('../master/unit');
var Week = require('./weekly-plan-item');

module.exports = class SewingBlockingPlanDetail extends BaseModel {
    constructor(source, type) {
        super(type || 'sewing-blocking-plan-detail', '1.0.0');
        this.code='';
        this.shCutting=0;
        this.shSewing=0;
        this.shFinishing=0;
        this.unitId={};
        this.unit=new Unit();
        this.weeklyPlanId={};
        this.weeklyPlanYear=1980;
        this.week=new Week();
        this.masterPlanComodityId=null;
        this.masterPlanComodity=null;
        this.isConfirmed=false;
        this.deliveryDate=new Date();
        this.quantity=0;
        this.remark='';

        this.efficiency=0;
        this.ehBooking=0;

        this.copy(source);
    }
};