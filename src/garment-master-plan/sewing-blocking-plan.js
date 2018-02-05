'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var SewingBlockingPlanDetail = require('./sewing-blocking-plan-detail');

module.exports = class SewingBlockingPlan extends BaseModel {
    constructor(source, type) {
        super(type || 'sewing-blocking-plan', '1.0.0');
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
        this.bookingItems=[];
        this.details=[];
        this.status='';

        this.copy(source);

        this.details = (this.details || []).map(detail => new SewingBlockingPlanDetail(detail));
    }
};