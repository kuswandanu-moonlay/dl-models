'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder=require('./production-order');
var Buyer = require('../master/buyer');
var Product = require('../master/product');
var OrderType = require('../master/order-type');
var ProcessType = require('../master/process-type');
var uom = require('../master/uom');
var Currency = require('../master/currency');
var AccountBank = require('../master/account-bank');
var SalesContractDetail=require('./sales-contract-detail');

module.exports = class SalesContract extends BaseModel {
    constructor(source) {
        super('sales-contract', '1.0.0');

        this.salesContractNo='';
        this.date=new Date();

        this.buyerId={};
        this.buyer= new Buyer();

        this.orderNo='';

        this.processTypeId={};
        this.processType=new ProcessType();

        this.orderTypeId={};
        this.orderType=new OrderType();

        this.materialId={};
        this.material=new Product();

        this.uomId={};
        this.uom=new uom();

        this.construction='';
        this.spelling=0;
        this.quality='';
        this.rollLength='';

        this.currencyId={};
        this.currency=new Currency();
        this.useIncomeTax = false;

        this.paymentMethod = '';
        this.paymentRequirement='';

        this.accountBankId={};
        this.accountBank=new AccountBank();

        this.transportFee='';
        this.deliveredTo='';
        this.packing='';
        this.agent='';
        this.comission=0;
        this.deliverySchedule=new Date();
        this.condition='';
        this.attachment='';

        this.productionOrders=[];

        this.details=[];
        this.details = (this.details || []).map(detail => new SalesContractDetail(detail));

        this.copy(source);
        this.productionOrders = (this.productionOrders || []).map(productionOrder => new ProductionOrder(productionOrder));
    }
};