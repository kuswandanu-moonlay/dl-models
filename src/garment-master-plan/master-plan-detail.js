'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Comodity = require('./master-plan-comodity');
var MasterPlanDetailItem = require('./master-plan-detail-item');

module.exports = class MasterPlanDetail extends BaseModel {
    constructor(source, type) {
        super(type || 'master-plan-detail', '1.0.0');
        this.code='';
        this.masterPlanComodityId={};
        this.masterPlanComodity=new Comodity();
        this.quantity=0;
        this.remark='';
        this.detailItems=[];
        this.isConfirmed=false;

        this.copy(source);
    }
};