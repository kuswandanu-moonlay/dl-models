var validate = require('../src/validator').auth;

it("#01. Role should valid", function() {
    var Role = require('../src/auth/role');
    validate.role(new Role());
})

it("#02. Profile should valid", function () {
    var Profile = require('../src/auth/profile');
    validate.profile(new Profile());
}) 
 
it("#03. Account should valid", function(){
    var Account = require('../src/auth/account');
    validate.account(new Account());
}) 
 