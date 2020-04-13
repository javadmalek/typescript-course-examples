import { OutputTarget } from '../interface/Summery';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
