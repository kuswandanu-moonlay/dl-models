'use strict'
var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../core/supplier');
var Buyer = require('../core/buyer');
var PurchaseOrderItem = require('../po/purchase-order-item');
var StandardQualityTestPercentage = require('./standard-quality-test-percentage');

class DODetail{
    constructor(source){
        this.SJNo = '';
        this.SJDate = new Date();
        this.realizationQuantity = 0;
    }
}


module.exports = class PurchaseOrder extends BaseModel {
    constructor(source, type) {
        type = type || 'purchase-order';

        super(type, '1.0.0');

        // Define properties
        this.iso = '';
        this.PRNo = '';
        this.PONo = '';
        this.RefPONo = '';
        this.linkedPONo = '';
        this.description = '';
        
        this.items = [];
        var _items = [];
        for (var item of this.items) {
            _items.push(new PurchaseOrderItem(item));
        }
        this.items = _items;
            
            //--------new field for PO Textile
            this.unit = '';
            this.PRDate = new Date();
            this.category = '';
            this.requestDate = new Date();
            this.staffName = '';
            this.receivedDate = new Date();
            
            // copy from PODL
            this.PODLNo = '';
            this.supplierId = {};
            this.supplier = new Supplier();
            this.PODate = new Date();
            this.deliveryDate = new Date();
            this.deliveryFeeByBuyer = false;
            this.termOfPayment = '';
            this.currency = '';
            this.rate=0; //rate sesuai currency
            this.paymentDue = 0;
            this.ppn = 10;
            this.usePPn = false;
            this.usePPh = false;
            this.ispost=false;
            
                //additional field for PODL
                this.standardQuality = new StandardQualityTestPercentage();
                this.otherTest = '';
        
            //field for SuratJalan
            this.DOitems = [];
            var _DOItems = [];
            for (var item of this.DOitems) {
                _DOItems.push(new DODetail(item));
            }
            this.DOitems = _DOItems;
            
            //field for Monitoring
            this.orderedDate = new Date();
            this.productArriveDate = new Date();
        
        //additional field for PO
        this.RONo = '';
        this.article = '';
        this.buyerId = {};
        this.buyer = new Buyer();
        this.shipmentDate = new Date();
        this.copy(source);
        
    }
}
