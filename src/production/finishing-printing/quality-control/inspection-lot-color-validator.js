require("should");
var validateKanban = require("../kanban-validator");
var validateInpectionLotColorItem = require("./inspection-lot-color-item-validator");
        
module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('kanbanId');
    data.kanbanId.should.instanceOf(Object);

    data.should.have.property('kanban');
    data.kanban.should.instanceOf(Object);
    validateKanban(data.kanban);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateInpectionLotColorItem(item);
    }
};