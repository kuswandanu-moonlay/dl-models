var test = function(name, path) {
    describe(name, function() {
        require(path);
    })
}


test('@master', './master-test');
test('@purchasing', './purchasing-test');