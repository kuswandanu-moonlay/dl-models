'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Buyer = require('../../master/buyer');
var LampStandard = require('../../master/lamp-standard');
var uom = require('../../master/uom');
var ProductionOrderDetail=require('./production-order-detail');

module.exports = class ProductionOrder extends BaseModel {
    constructor(source) {
        super('production-order', '1.0.0');

        this.salesContractNo='';
        this.orderNo='';
        this.date=new Date();
        this.isExport=true;

        this.buyerId={};
        this.buyer= new Buyer();
        
        this.processType='';
        this.orderType='';
        this.construction='';
        this.material='';

        this.orderQuantity=0;
        this.uom=new uom();
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
        this.copy(source);

        this.details = (this.details || []).map(detail => new ProductionOrderDetail(detail));
    }
};