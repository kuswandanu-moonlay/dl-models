'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Buyer = require('../master/buyer');
var Product = require('../master/product');
var OrderType = require('../master/order-type');
var ProcessType = require('../master/process-type');
var LampStandard = require('../master/lamp-standard');
var uom = require('../master/uom');
var ProductionOrderDetail = require('./production-order-detail');
var MaterialConstruction = require('../master/material-construction');
var YarnMaterial = require('../master/yarn-material');
var FinishType = require('../master/finish-type');
var StandardTest = require('../master/standard-test');
var DesignMotive = require('../master/design-motive');
var ProductionOrderLampStandard = require('./production-order-lamp-standard');
var Account = require('../auth/account');

module.exports = class ProductionOrder extends BaseModel {
    constructor(source) {
        super('production-order', '1.0.0');

        this.salesContractNo = '';
        this.salesContractId = {};
        this.orderNo = '';
        // this.documentNumber = '';

        this.buyerId = {};
        this.buyer = new Buyer();

        this.processTypeId = {};
        this.processType = new ProcessType();

        this.orderTypeId = {};
        this.orderType = new OrderType();

        this.materialId = {};
        this.material = new Product();

        this.orderQuantity = 0;

        this.designMotiveId = {};
        this.designMotive = new DesignMotive();

        this.uomId = {};
        this.uom = new uom();

        this.materialConstructionId = {};
        this.materialConstruction = new MaterialConstruction();

        this.shippingQuantityTolerance = 0;//toleransi jumlah kirim
        this.materialOrigin = ''; // asal material
        this.finishWidth = '';

        this.finishTypeId = {};
        this.finishType = new FinishType();

        this.designNumber = '';
        this.designCode = '';
        this.handlingStandard = '';
        this.RUN = '';
        this.RUNWidth = [];
        this.shrinkageStandard = '';

        this.lampStandards = [];

        this.yarnMaterialId = {};
        this.yarnMaterial = new YarnMaterial();

        this.standardTestId = {};
        this.standardTest = new StandardTest();

        this.accountId = {};
        this.account = new Account();

        this.articleFabricEdge = ''; //tulisan pinggir kain
        this.packingInstruction = '';
        this.materialWidth = '';
        this.sample = '';
        this.deliveryDate = new Date();
        this.remark = '';
        this.details = [];
        this.isUsed = false;
        this.isClosed = false;
        this.isRequested = false;
        this.isCompleted = false;
        this.copy(source);

        this.lampStandards = (this.lampStandards || []).map(lampStandard => new ProductionOrderLampStandard(lampStandard));
        this.details = (this.details || []).map(detail => new ProductionOrderDetail(detail));
    }
};