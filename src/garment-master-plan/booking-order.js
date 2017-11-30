'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var BookDetail = require('./booking-order-detail');
var StandardHour = require('./standard-hour');
var Style =require('./style');

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

        this.styleId={};
        this.style=new Style();

        this.standardHourId={};
        this.standardHour=new StandardHour();

        this.orderQuantity=0;
        this.remark = '';
        this.isConfirmed=false;
        this.details=[];

        this.copy(source);

        this.details = (this.details || []).map(detail => new BookDetail(detail));
    }
};
