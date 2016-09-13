'use strict'
var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../core/supplier');
var Buyer = require('../core/buyer');
var PurchaseOrderItem = require('../po/purchase-order-item');
var StandardQualityTestPercentage = require('./standard-quality-test-percentage');

module.exports = class PurchaseOrder extends BaseModel {
    constructor(source, type) {
        type = type || 'purchase-order';

        super(type, '1.0.0');

        // Define properties
        this.iso = '';
        this.RONo = '';
        this.PRNo = '';
        this.PONo = '';
        this.RefPONo = '';
        this.linkedPONo = '';
        this.article = '';
        this.buyerId = {};
        this.buyer = new Buyer();
        this.shipmentDate = new Date();
        
        // copy from PODL
        this.supplierId = {};
        this.supplier = new Supplier();
        this.termOfPayment = '';
        this.ppn = 10;
        this.usePPn = false;
        this.usePPh = false;
        this.deliveryDate = new Date();
        this.deliveryFeeByBuyer = false;
        this.paymentDue = 0;
        this.currency = '';
        this.rate=0; //rate sesuai currency
        this.PODLNo = '';
        this.standardQuality = new StandardQualityTestPercentage();
        this.ispost=false;
        this.PODate = new Date();
        this.otherTest = ''
        
        //--------new field for PO Textile
        
        this.unit = '';
        this.PRDate = new Date();
        this.category = '';
        this.requestDate = new Date();
        this.staffName = '';
        this.receivedDate = new Date();
         //---------
        this.items = [];
        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new PurchaseOrderItem(item));
        }
        this.items = _items;
    }
}
