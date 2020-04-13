import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';
import { MatchDataTuple } from '../MatchDataTuple';

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    // Creating an object that satisfies the 'DataReader'interface
    // Creating an instance of MatchReader and passing something in satisfying the 'DataReader' interface
    return new MatchReader(new CsvFileReader(filename));
  }

  matchs: MatchDataTuple[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matchs = this.reader.data.map(this.mapFootballRow);
  }

  mapFootballRow(row: string[]): MatchDataTuple {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as MatchResult,
      row[6],
    ];
  }
}
