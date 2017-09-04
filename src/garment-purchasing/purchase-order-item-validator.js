require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validateCurrency = require('../master/currency-validator');
var validateSupplier = require('../master/supplier-validator');
var validateVat = require('../master/vat-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('refNo');
    data.refNo.should.instanceof(String);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('defaultQuantity');
    data.defaultQuantity.should.instanceOf(Number);

    data.should.have.property('defaultUom');
    data.defaultUom.should.instanceOf(Object);
    validateUom(data.defaultUom);

    data.should.have.property('dealQuantity');
    data.dealQuantity.should.instanceOf(Number);

    data.should.have.property('dealUom');
    data.dealUom.should.instanceOf(Object);
    validateUom(data.dealUom);

    data.should.have.property('realizationQuantity');
    data.realizationQuantity.should.instanceOf(Number);

    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceOf(Number);

    data.should.have.property('priceBeforeTax');
    data.priceBeforeTax.should.instanceOf(Number);

    data.should.have.property('budgetPrice');
    data.budgetPrice.should.instanceOf(Number);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);

    data.should.have.property('categoryId');
    data.categoryId.should.instanceof(Object);

    data.should.have.property('category');
    data.category.should.instanceof(Object);

    data.should.have.property('conversion');
    data.conversion.should.instanceOf(Number);

    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);

    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceof(Object);

    data.should.have.property('purchaseOrderExternal');
    data.purchaseOrderExternal.should.instanceof(Object);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('freightCostBy');
    data.freightCostBy.should.instanceOf(String);

    data.should.have.property('paymentMethod');
    data.paymentMethod.should.instanceOf(String);

    data.should.have.property('paymentDueDays');
    data.paymentDueDays.should.instanceOf(Number);

    data.should.have.property('vat');
    data.vat.should.instanceof(Object);
    validateVat(data.vat);

    data.should.have.property('useVat');
    data.useVat.should.instanceOf(Boolean);

    data.should.have.property('vatRate');
    data.vatRate.should.instanceOf(Number);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('status');
    data.status.should.instanceof(Object);

    data.should.have.property('id_po');
    data.id_po.should.instanceOf(String);

};
