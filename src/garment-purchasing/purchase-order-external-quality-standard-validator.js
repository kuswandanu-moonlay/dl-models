require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('shrinkage');
    data.shrinkage.should.instanceOf(String);

    data.should.have.property('wetRubbing');
    data.wetRubbing.should.instanceOf(String);

    data.should.have.property('dryRubbing');
    data.dryRubbing.should.instanceOf(String);

    data.should.have.property('washing');
    data.washing.should.instanceOf(String);

    data.should.have.property('darkPerspiration');
    data.darkPerspiration.should.instanceOf(String);

    data.should.have.property('lightMedPerspiration');
    data.lightMedPerspiration.should.instanceOf(String);

    data.should.have.property('pieceLength');
    data.pieceLength.should.instanceOf(String);

    data.should.have.property('qualityStandardType');
    data.qualityStandardType.should.instanceOf(String);
};