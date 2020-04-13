"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = require("../analyzers/WinsAnalysis");
const ConsoleReport_1 = require("../reportTargets/ConsoleReport");
const HtmlReport_1 = require("../reportTargets/HtmlReport");
class Summery {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winAnalysisWithConsolwReport(team) {
        return new Summery(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    static winAnalysisWithHtmlwReport(team, outputFilename) {
        return new Summery(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport(outputFilename));
    }
    buildAndReport(matchs) {
        const output = this.analyzer.run(matchs);
        this.outputTarget.print(output);
    }
}
exports.Summery = Summery;
