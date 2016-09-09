var test = function (name, path) {
    describe(name, function () {
        require(path);
    })
}


test('@buyer', './buyer');
test('@supplier', './supplier');
test('@product', './product');
test('@uom', './uom');
test('@PurchaseOrder', './purchase-order-test');
test('@PurchaseOrderGroup', './purchase-order-group-test');
test('@SuratJalan', './surat-jalan-test');