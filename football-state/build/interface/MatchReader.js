"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("../utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matchs = [];
    }
    static fromCsv(filename) {
        // Creating an object that satisfies the 'DataReader'interface
        // Creating an instance of MatchReader and passing something in satisfying the 'DataReader' interface
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    load() {
        this.reader.read();
        this.matchs = this.reader.data.map(this.mapFootballRow);
    }
    mapFootballRow(row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
