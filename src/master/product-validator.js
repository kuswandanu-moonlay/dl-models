require("should");
var validateUom = require('./uom-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('name');
    data.name.should.be.String();

    data.should.have.property('price');
    data.price.should.instanceOf(Number);

    data.should.have.property('description');
    data.description.should.be.String();

    data.should.have.property('uomId');
    data.uomId.should.instanceOf(Object);

    data.should.have.property('uom');
    data.uom.should.instanceOf(Object);
    validateUom(data.uom);

    data.should.have.property('tags');
    data.tags.should.be.String();

    data.should.have.property('properties');
    data.properties.should.be.Array();
};