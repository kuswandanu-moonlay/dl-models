'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var MasterPlanDetail = require('./master-plan-detail');

module.exports = class MasterPlan extends BaseModel {
    constructor(source, type) {
        super(type || 'master-plan', '1.0.0');
        this.code = '';
        this.bookingOrderNo='';
        this.bookingOrderId={};
        this.garmentBuyerId={};
        this.garmentBuyerName='';
        this.garmentBuyerCode='';
        this.quantity=0;
        this.bookingDate=new Date();
        this.deliveryDate=new Date();
        this.remark='';
        this.details=[];
        this.status='';

        this.copy(source);

        this.details = (this.details || []).map(detail => new MasterPlanDetail(detail));
    }
};