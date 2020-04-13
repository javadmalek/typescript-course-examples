"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./inheritance/MatchReader");
const Summery_1 = require("./interface/Summery");
const clubName = 'Perspolis';
const htmlFilename = 'build/html_report.html';
const csvFileName = 'football_matchs.csv';
const logPerspolisReport = (perspolisData) => {
    let perspolisWinsH = 0;
    let perspolisWinsA = 0;
    for (let match of perspolisData) {
        if (match[1] === clubName && match[5] === MatchResult_1.MatchResult.HomeWins) {
            perspolisWinsH++;
        }
        else if (match[2] === clubName && match[5] === MatchResult_1.MatchResult.AwayWins) {
            perspolisWinsA++;
        }
    }
    console.log(`Perspolis wins ${perspolisWinsH} games at home`);
    console.log(`Perspolis wins ${perspolisWinsA} games at away`);
    console.log(`Perspolis wins ${perspolisWinsA + perspolisWinsH} games`);
};
// Inheritance Method
const footballMatchsReader = new MatchReader_1.MatchReader(csvFileName);
footballMatchsReader.read();
logPerspolisReport(footballMatchsReader.data);
// =======================
// Interface method
const MatchReader_2 = require("./interface/MatchReader");
const matchReader = MatchReader_2.MatchReader.fromCsv(csvFileName);
matchReader.load();
logPerspolisReport(matchReader.matchs);
console.log('*********************');
console.log('Composition with interface');
const summeryConsole = Summery_1.Summery.winAnalysisWithConsolwReport(clubName);
summeryConsole.buildAndReport(matchReader.matchs);
const summeryHtml = Summery_1.Summery.winAnalysisWithHtmlwReport(clubName, htmlFilename);
summeryHtml.buildAndReport(matchReader.matchs);
