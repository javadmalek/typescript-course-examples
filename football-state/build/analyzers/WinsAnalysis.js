"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matchs) {
        let wins = 0;
        for (let match of matchs) {
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWins) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWins) {
                wins++;
            }
        }
        return `Perspolis wins ${wins} games.`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
