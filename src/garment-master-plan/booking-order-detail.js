'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('../master/unit');
var Week = require('./weekly-plan-item');


module.exports = class BookingOrderDetail extends BaseModel {
    constructor(source, type) {
        super(type || 'booking-order-detail', '1.0.0');

        this.unitId = {};
        this.unit = new Unit();
        this.weeklyPlanId={};
        this.weeklyPlanYear=1900;
        this.week =  new Week();
        this.quantity = 0;

        this.copy(source);
    }
};
