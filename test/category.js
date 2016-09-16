var validate = require('../src/validator').core;

it("#09. Category should valid", function(){
    var Category = require('../src/core/category');
    
    validate.category(new Category());
})