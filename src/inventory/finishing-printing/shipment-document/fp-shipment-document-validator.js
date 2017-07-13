require("should");
var validateShipmentDocumentDetail = require("./fp-shipment-document-detail-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    //Shipment details
    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceof(Object);

    data.should.have.property('deliveryNo');
    data.deliveryNo.should.be.String();

    //User defined
    data.should.have.property('productIdentity');
    data.productIdentity.should.instanceOf(String);

    //Buyer detail
    data.should.have.property('buyerId');
    data.buyerId.should.instanceof(Object);

    data.should.have.property('buyerCode');
    data.buyerCode.should.be.String();

    data.should.have.property('buyerName');
    data.buyerName.should.be.String();

    data.should.have.property('buyerAddress');
    data.buyerAddress.should.be.String();

    data.should.have.property('buyerType');
    data.buyerType.should.be.String();

    //Production Orders list
    data.should.have.property('details');
    data.details.should.instanceOf(Array);
    for (var detail of data.details) {
        validateShipmentDocumentDetail(detail);
    }
};