'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class OrderStatusHistory extends BaseModel {
    constructor(source) {
        super('order-status-history', '1.0.0');

        this.salesContractNo = '';
        this.deliveryDateCorrection = new Date();
        this.reason = '';
        this.copy(source);
    }
};