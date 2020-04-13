import { MatchResult } from './MatchResult';
import { MatchReader, MatchDataTuple } from './inheritance/MatchReader';
import { Summery } from './interface/Summery';

const clubName = 'Perspolis';
const htmlFilename = 'build/html_report.html';
const csvFileName = 'football_matchs.csv';
const logPerspolisReport = (perspolisData: MatchDataTuple[]): void => {
  let perspolisWinsH = 0;
  let perspolisWinsA = 0;

  for (let match of perspolisData) {
    if (match[1] === clubName && match[5] === MatchResult.HomeWins) {
      perspolisWinsH++;
    } else if (match[2] === clubName && match[5] === MatchResult.AwayWins) {
      perspolisWinsA++;
    }
  }

  console.log(`Perspolis wins ${perspolisWinsH} games at home`);
  console.log(`Perspolis wins ${perspolisWinsA} games at away`);
  console.log(`Perspolis wins ${perspolisWinsA + perspolisWinsH} games`);
};

// Inheritance Method
const footballMatchsReader = new MatchReader(csvFileName);
footballMatchsReader.read();

logPerspolisReport(footballMatchsReader.data);

// =======================

// Interface method
import { MatchReader as MatchReaderInterface } from './interface/MatchReader';

const matchReader = MatchReaderInterface.fromCsv(csvFileName);
matchReader.load();

logPerspolisReport(matchReader.matchs);

console.log('*********************');
console.log('Composition with interface');

const summeryConsole = Summery.winAnalysisWithConsolwReport(clubName);
summeryConsole.buildAndReport(matchReader.matchs);

const summeryHtml = Summery.winAnalysisWithHtmlwReport(clubName, htmlFilename);
summeryHtml.buildAndReport(matchReader.matchs);
