var test = function(name, path) {
    describe(name, function() {
        require(path);
    })
}

test('@auth', './auth-test');
test('@master', './master-test');
test('@inventory', './inventory-test');
test('@purchasing', './purchasing-test');
test('@production', './production-test');
test('@sales', './sales-test');
