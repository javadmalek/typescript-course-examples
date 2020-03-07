"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url)
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
    var _b = data, id = _b.id, title = _b.title, completed = _b.completed;
    console.log("\n        The Todo with ID: " + id + "\n        Has a title of: " + title + "\n        Is it finished? " + completed + "\n        ");
});
