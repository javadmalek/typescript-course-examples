"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    constructor(outputFilename) {
        this.outputFilename = outputFilename;
    }
    print(report) {
        const html = `
      <div>
        <h1>Html Rreport</h1>
        <span>${report}</span>
      </div>
    `;
        fs_1.default.writeFileSync(this.outputFilename, html);
    }
}
exports.HtmlReport = HtmlReport;
