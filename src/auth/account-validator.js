require("should");

var validateRole = require('./role-validator');
var validateProfile = require('./profile-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('username');
    data.username.should.instanceof(String);

    data.should.have.property('password');
    data.password.should.instanceof(String);

    data.should.have.property('isLocked');
    data.isLocked.should.instanceof(Boolean);

    data.should.have.property('roles');
    data.roles.should.instanceof(Array);
    for (var role of data.roles)
        validateRole(role);


    data.should.have.property('profile');
    data.profile.should.instanceof(Object);
    validateProfile(data.profile);
};