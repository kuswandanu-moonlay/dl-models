require("should");
var validateStyle = require('./style-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);
    
    data.should.have.property('date');
    data.date.should.instanceof(Date);

    // data.should.have.property('styleId');
    // data.styleId.should.instanceOf(Object);

    // data.should.have.property('style');
    // data.style.should.instanceOf(Object);
    // validateStyle(data.style);

    data.should.have.property('garmentBuyerId');
    data.garmentBuyerId.should.instanceOf(Object);
    
    data.should.have.property('garmentBuyerName');
    data.garmentBuyerName.should.be.String();
    
    data.should.have.property('garmentBuyerCode');
    data.garmentBuyerCode.should.be.String();

    data.should.have.property('masterplanComodityId');
    data.garmentBuyerId.should.instanceOf(Object);
    
    data.should.have.property('masterplanComodityName');
    data.garmentBuyerName.should.be.String();
    
    data.should.have.property('masterplanComodityCode');
    data.garmentBuyerCode.should.be.String();
    
    data.should.have.property('shCutting');
    data.shCutting.should.instanceOf(Number);
    
    data.should.have.property('shSewing');
    data.shSewing.should.instanceOf(Number);
    
    data.should.have.property('shFinishing');
    data.shFinishing.should.instanceOf(Number);
};