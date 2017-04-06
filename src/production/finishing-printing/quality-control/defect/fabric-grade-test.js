'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var FabricTestCriterion = require("./fabric-test-criterion");

module.exports = class FabricGradeTest extends BaseModel {
    constructor(source) {
        super('fabric-score', '1.0.0');

        // Define properties.
        this.type = '';
        this.pcsNo = '';
        this.grade = '';
        this.width = 0;
        this.pointSystem = 10;
        
        this.initLength = 0;
        this.avalLength = 0;
        this.sampleLength = 0;
        this.finalLength = 0;
        
        this.score = 0;
        this.finalScore = 0;
        
        this.criteria = [];
        this.copy(source);

        var defaultProblems = this.type === "PRINTING" ? FabricTestCriterion.prototype.getPrintingProblemSet() : FabricTestCriterion.prototype.getFinishingProblemSet();
        this.criteria = (this.criteria || defaultProblems).map(item => new FabricTestCriterion(item.group, item.code, item.name, item.score));
    }
};
