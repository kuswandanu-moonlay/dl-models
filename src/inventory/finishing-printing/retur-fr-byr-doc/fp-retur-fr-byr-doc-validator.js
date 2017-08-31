require("should");
var FPReturFromBuyerDocDetail= require("./fp-retur-fr-byr-doc-detail-validator");
var BuyerValidator = require("../../../master/buyer-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('codeProduct');
    data.codeProduct.should.instanceof(String);

    data.should.have.property('destination');
    data.destination.should.instanceof(String);

    data.should.have.property('buyerId');
    data.buyerId.should.instanceof(Object);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);
    BuyerValidator(data.buyer);

    data.should.have.property("isVoid");
    data.isVoid.should.instanceOf(Boolean);

    data.should.have.property('date');
    data.date.should.instanceof(Object);

    data.should.have.property('spk');
    data.spk.should.instanceof(String);

    data.should.have.property('coverLetter');
    data.coverLetter.should.instanceof(String);

    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('storageName');
    data.storageName.should.be.String();

    data.should.have.property('storageReferenceType');
    data.storageReferenceType.should.be.String();

    data.should.have.property('storageType');
    data.storageType.should.be.String();

    data.should.have.property('details');
    data.details.should.instanceOf(Array);
    for (var item of data.details) {
        FPReturFromBuyerDocDetail(item);
    }

};