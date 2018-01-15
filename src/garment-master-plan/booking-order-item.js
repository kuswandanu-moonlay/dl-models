'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Comodity = require('./master-plan-comodity');


module.exports = class BookingOrderItem extends BaseModel {
    constructor(source, type) {
        super(type || 'booking-order-item', '1.0.0');

        this.code='';
        this.masterPlanComodity= new Comodity();
        this.masterPlanComodityId={};
        this.deliveryDate=new Date();

        //this.isConfirmed=false;

        this.quantity = 0;
        this.remark='';

        this.copy(source);
    }
};
