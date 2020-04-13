"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((part) => +part);
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
