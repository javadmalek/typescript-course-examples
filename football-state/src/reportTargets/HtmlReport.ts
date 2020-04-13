import { OutputTarget } from "../interface/Summery";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  constructor(public outputFilename: string) {
    
  }
  print(report: string): void {
    const html = `
      <div>
        <h1>Html Rreport</h1>
        <span>${report}</span>
      </div>
    `;

    fs.writeFileSync(this.outputFilename, html);
  }
}