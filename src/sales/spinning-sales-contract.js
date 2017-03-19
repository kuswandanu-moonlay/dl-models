'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Buyer = require('../master/buyer');
var uom = require('../master/uom');
var AccountBank = require('../master/account-bank');
var Comodity = require('../master/comodity');
var Quality = require('../master/quality');
var TermOfPayment = require('../master/term-of-payment');


module.exports = class SpinningSalesContract extends BaseModel {
    constructor(source) {
        super('spinning-sales-contract', '1.0.0');

        this.salesContractNo = '';

        this.buyerId = {};
        this.buyer = new Buyer();

        this.dispositionNumber = '';

        this.uomId = {};
        this.uom = new uom();

        this.orderQuantity = 0;
        this.shippingQuantityTolerance = 0;

        this.comodityId = {};
        this.comodity = new Comodity();

        this.comodityDescription = '';

        this.qualityId = {};
        this.quality = new Quality();

        this.incomeTax = '';

        this.termOfPaymentId = {};
        this.termOfPayment = new TermOfPayment();

        this.termOfShipment = "";

        this.deliveredTo = '';

        this.accountBankId = {};
        this.accountBank = new AccountBank();

        this.transportFee = '';
        this.packing = '';
        this.price = 0;

        this.agentId = {};
        this.agent = new Buyer();

        this.comission = 0;
        this.deliverySchedule = new Date();
        this.condition = '';
        this.remark = '';

        this.copy(source);
    }
};