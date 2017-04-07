'use strict';

class FabricTestCriterion {
    constructor(group, code, name, score) {
        this.code = code || "";
        this.group = group || "";
        this.name = name || "";
        this.score = score || {
            A: 0,
            B: 0,
            C: 0,
            D: 0
        };
    }
}

var generalProblemSet = () => [
    new FabricTestCriterion("BENANG", "B001", "Slubs"),
    new FabricTestCriterion("BENANG", "B002", "Neps"),
    new FabricTestCriterion("BENANG", "B003", "Kontaminasi Fiber"),
    new FabricTestCriterion("WEAVING", "W001", "Pakan Renggang"),
    new FabricTestCriterion("WEAVING", "W002", "Pakan Rapat"),
    new FabricTestCriterion("WEAVING", "W003", "Pakan Double"),
    new FabricTestCriterion("WEAVING", "W004", "Pakan Tebal Tipis"),
    new FabricTestCriterion("WEAVING", "W005", "Lusi Tebal Tipis"),
    new FabricTestCriterion("WEAVING", "W006", "Lusi Putus"),
    new FabricTestCriterion("WEAVING", "W007", "Lusi Double"),
    new FabricTestCriterion("WEAVING", "W008", "Madal Sumbi"),
    new FabricTestCriterion("WEAVING", "W009", "Salah Anyam / UP"),
    new FabricTestCriterion("WEAVING", "W010", "Reed Mark"),
    new FabricTestCriterion("WEAVING", "W011", "Temple Mark"),
    new FabricTestCriterion("WEAVING", "W012", "Snarl"),
    new FabricTestCriterion("PRODUKSI", "P001", "Sobek Tepi"),
    new FabricTestCriterion("PRODUKSI", "P002", "Kusut Mati"),
    new FabricTestCriterion("PRODUKSI", "P003", "Kusut / Krismak"),
    new FabricTestCriterion("PRODUKSI", "P004", "Belang Kondensat"),
    new FabricTestCriterion("PRODUKSI", "P005", "Belang Absorbsi"),
    new FabricTestCriterion("PRODUKSI", "P006", "Flek Minyak / Dyest"),
    new FabricTestCriterion("PRODUKSI", "P007", "Flek Oil Jarum"),
    new FabricTestCriterion("PRODUKSI", "P008", "Bintik Htm, Mrh, Biru"),
    new FabricTestCriterion("PRODUKSI", "P009", "Tepi Melipat"),
    new FabricTestCriterion("PRODUKSI", "P010", "Lebar Tak Sama"),
    new FabricTestCriterion("PRODUKSI", "P011", "Lubang / Pin Hole"),
    new FabricTestCriterion("PRODUKSI", "P012", "Bowing"),
    new FabricTestCriterion("PRODUKSI", "P013", "Skewing"),
];

var printingProblemSet = () => [
    new FabricTestCriterion("PRODUKSI", "P201", "Meleset"),
    new FabricTestCriterion("PRODUKSI", "P202", "Flek"),
    new FabricTestCriterion("PRODUKSI", "P203", "Print Kosong / Bundas"),
    new FabricTestCriterion("PRODUKSI", "P204", "Nyetrip")
];

var finishingProblemSet = () => [
    new FabricTestCriterion("PRODUKSI", "P101", "Kotor Tanah / Debu"),
    new FabricTestCriterion("PRODUKSI", "P102", "Kotor Hitam"),
    new FabricTestCriterion("PRODUKSI", "P103", "Belang Kusut")
];

FabricTestCriterion.prototype.getPrintingProblemSet = function() {
    return [].concat(generalProblemSet(), printingProblemSet());
};

FabricTestCriterion.prototype.getFinishingProblemSet = function() {
    return [].concat(generalProblemSet(), finishingProblemSet());
};

module.exports = FabricTestCriterion;
