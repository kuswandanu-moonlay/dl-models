'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Buyer = require('../master/buyer');
var Product = require('../master/product');
var OrderType = require('../master/order-type');
var ProcessType = require('../master/process-type');
var LampStandard = require('../master/lamp-standard');
var uom = require('../master/uom');
var ProductionOrderDetail=require('./production-order-detail');

module.exports = class ProductionOrder extends BaseModel {
    constructor(source) {
        super('production-order', '1.0.0');

        this.salesContractNo='';
        this.orderNo='';

        this.buyerId={};
        this.buyer= new Buyer();
        
        this.processTypeId={};
        this.processType=new ProcessType();

        this.orderTypeId={};
        this.orderType=new OrderType();

        this.materialId={};
        this.material=new Product();

        this.orderQuantity=0;

        this.uomId={};
        this.uom=new uom();

        this.construction='';
        this.spelling=0;
        this.originGreigeFabric=''; // asal kain greige
        this.finishWidth='';
        this.design='';
        this.handlingStandard='';
        this.RUN='';
        this.shrinkageStandard='';

        this.lampStandardId={};
        this.lampStandard=new LampStandard();

        this.rollLength='';
        this.sample='';
        this.deliveryDate=new Date();
        this.remark='';
        this.details=[];
        this.isUsed=false;
        this.copy(source);

        this.details = (this.details || []).map(detail => new ProductionOrderDetail(detail));
    }
};