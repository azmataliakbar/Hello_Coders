"use strict";
// src/Circle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.name = 'Circle';
        this.radius = radius;
        this.area = this.calculateArea();
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
