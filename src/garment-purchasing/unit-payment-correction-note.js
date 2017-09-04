'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var DeliveryOrder = require('./delivery-order');
var UnitPaymentCorrectionNoteItem = require('./unit-payment-correction-note-item');

module.exports = class UnitPaymentCorrectionNote extends BaseModel {
    constructor(source) {
        super('garment-unit-payment-correction-note', '1.0.0');

        this.no = '';
        this.date = new Date();
        this.correctionType = '';
        this.deliveryOrderId = {};
        this.deliveryOrder = new DeliveryOrder();
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new UnitPaymentCorrectionNoteItem(item));
    }
};