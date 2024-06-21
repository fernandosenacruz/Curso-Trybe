"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.read = void 0;
const promises_1 = __importDefault(require("fs/promises"));
function read() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield promises_1.default.readFile("./books.json", "utf8");
        const books = JSON.parse(data);
        return books;
    });
}
exports.read = read;
function write(data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield promises_1.default.writeFile("./books.json", JSON.stringify(data));
    });
}
exports.write = write;
