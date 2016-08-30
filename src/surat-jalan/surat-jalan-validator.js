require("should");
var validateSupplier = require('../core/supplier-validator');
var validateSuratJalanPOItem = require('./surat-jalan-po-item-validator');

module.exports = function (data) {
    data.should.have.property('SJNo');
    data.SJNo.should.instanceOf(String);

    data.should.have.property('SJDate');
    data.SJDate.should.instanceOf(Date);

    data.should.have.property('productArriveDate');
    data.productArriveDate.should.instanceOf(Date);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('deliveryType');
    data.deliveryType.should.instanceOf(String);

    data.should.have.property('deliveryNo');
    data.deliveryNo.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateSuratJalanPOItem(item);
    }
}