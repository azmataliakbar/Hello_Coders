// src/Circle.ts

import { Shape } from './shape';

export class Circle implements Shape {
  name: string;
  area: number;
  radius: number;

  constructor(radius: number) {
    this.name = 'Circle';
    this.radius = radius;
    this.area = this.calculateArea();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
