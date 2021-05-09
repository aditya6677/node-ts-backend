"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Express_1 = __importDefault(require("./Express"));
var Database_1 = __importDefault(require("./Database"));
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.prototype.loadServer = function () {
        console.log("Loading Server....");
        Express_1.default.init();
    };
    Loader.prototype.loadDatabase = function () {
        console.log("Loading Database....");
        Database_1.default.init();
    };
    return Loader;
}());
exports.default = new Loader;
