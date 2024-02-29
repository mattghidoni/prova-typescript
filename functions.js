"use strict";
exports.__esModule = true;
exports.saveDataToFile = exports.processItem = exports.differenza = exports.somma = void 0;
var fs_1 = require("fs");
function somma(number1, number2) {
    return number1 + number2;
}
exports.somma = somma;
exports.differenza = function (number1, number2) {
    return number1 - number2;
};
/**
 * @description processo lo User.
 * @function processItem
 * @param {IUser[]} list
 * @returns void
 */
function processItem(list) {
    for (var i = 0; i < list.length; i++) {
        console.log("");
        console.log("NUMERO " + i + ": ");
        var user = list[i];
        fs_1["default"].writeFileSync("./risultati.json", JSON.stringify(user), "utf-8");
        console.log(user);
    }
}
exports.processItem = processItem;
function saveDataToFile(list) {
    fs_1["default"].writeFileSync("./risultati.json", JSON.stringify(list), "utf-8");
}
exports.saveDataToFile = saveDataToFile;
