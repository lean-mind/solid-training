interface Circle {
  radius: number
}

interface Rectangle {
  width: number
  heigth: number
}

class AreaCalculator {
  sumRectangleAreas(rectangles: Rectangle[]): number {
    let totalArea = 0

    for(const rectangle of rectangles) {
      totalArea += (rectangle.width * rectangle.heigth)
    }

    return totalArea
  }

  sumCircleAreas(circles: Circle[]): number {
    let totalArea = 0

    for(const circle of circles) {
      totalArea += (circle.radius * Math.pow(Math.PI, 2))
    }

    return totalArea
  }
}


interface Shape {
  calculateArea(): number
}

class Circle implements Shape {
  radius: number

  calculateArea(): number {
    return (this.radius * Math.pow(Math.PI, 2))
  }
}

class Rectangle implements Shape {
  width: number
  heigth: number

  calculateArea(): number {
    return this.width * this.heigth
  }
}

class AreaCalculator {
  sumAreas(shapes: Shape[]): number {
    let totalArea = 0

    for(const shape of shapes) {
      totalArea += shape.calculateArea()
    }

    return totalArea
  }
}
