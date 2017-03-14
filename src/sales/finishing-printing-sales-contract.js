'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder=require('./production-order');
var Buyer = require('../master/buyer');
var Product = require('../master/product');
var OrderType = require('../master/order-type');
var ProcessType = require('../master/process-type');
var uom = require('../master/uom');
var AccountBank = require('../master/account-bank');
var MaterialConstruction=require('../master/material-construction');
var SalesContractDetail=require('./finishing-printing-sales-contract-detail');
var Comodity = require('../master/comodity');
var Quality = require('../master/quality');
var YarnMaterial= require('../master/yarn-material');
var TermOfPayment= require('../master/term-of-payment');


module.exports = class FinishingPrintingSalesContract extends BaseModel {
    constructor(source) {
        super('finishing-printing-sales-contract', '1.0.0');

        this.salesContractNo='';

        this.buyerId={};
        this.buyer= new Buyer();

        this.dispositionNumber='';

        this.processTypeId={};
        this.processType=new ProcessType();

        this.orderTypeId={};
        this.orderType=new OrderType();

        this.materialId={};
        this.material=new Product();

        this.uomId={};
        this.uom=new uom();

        this.materialConstructionId={};
        this.materialConstruction=new MaterialConstruction();
        
        this.yarnMaterialId={};
        this.yarnMaterial=new YarnMaterial();

        this.materialWidth='';
        this.orderQuantity=0;
        this.shippingQuantityTolerance=0;
        this.amount=0;

        this.comodityId={};
        this.comodity=new Comodity();

        this.comodityDescription='';

        this.qualityId={};
        this.quality=new Quality();

        this.useIncomeTax = false;

        this.termOfPaymentId = {};
        this.termOfPayment=new TermOfPayment();

        this.accountBankId={};
        this.accountBank=new AccountBank();

        this.transportFee='';
        this.deliveredTo='';
        this.packing='';
        this.termOfShipment="";

        this.agentId={};
        this.agent=new Buyer();

        this.comission='';
        this.deliverySchedule=new Date();
        this.condition='';
        this.remark='';

        this.details=[];
        this.details = (this.details || []).map(detail => new SalesContractDetail(detail));

        this.copy(source);
    }
};