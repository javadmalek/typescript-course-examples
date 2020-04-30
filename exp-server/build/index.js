"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
var app = express_1.default();
// V 214
// it is a middleware and in charge to extract the body of request
// and attach it to the outcoming request object
app.use(body_parser_1.default({ extended: true }));
app.use(cookie_session_1.default({ keys: ['kjhjkhkj'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () { return console.log('Listening on posrt 3000'); });
