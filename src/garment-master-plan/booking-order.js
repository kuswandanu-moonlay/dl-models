'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var BookingItem = require('./booking-order-item');

module.exports = class BookingOrder extends BaseModel {
    constructor(source) {
        super('booking-order', '1.0.0');

        // Define properties.   
        this.code='';
        this.bookingDate = new Date();
        this.deliveryDate = new Date();

        this.garmentBuyerId={};
        this.garmentBuyerName='';
        this.garmentBuyerCode='';

        this.orderQuantity=0;
        this.remark = '';
        this.isMasterPlan=false;
        this.isCanceled=false;
        this.items=[];

        this.copy(source);

        this.items = (this.items || []).map(item => new BookingItem(item));
    }
};
