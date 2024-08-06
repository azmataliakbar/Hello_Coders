"use strict";
// src/Circle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    name;
    area;
    radius;
    constructor(radius) {
        this.name = 'Circle';
        this.radius = radius;
        this.area = this.calculateArea();
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
