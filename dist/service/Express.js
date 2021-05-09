"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Express = /** @class */ (function () {
    function Express() {
        this.express = express_1.default();
    }
    Express.prototype.init = function () {
        var port = 7676;
        this.express.listen(port, function () {
            return console.log("Server :: Running @ 'http://localhost:" + port + "'");
        });
    };
    return Express;
}());
exports.default = new Express();
