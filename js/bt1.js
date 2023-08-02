class Rectangle {
    constructor(weith, height, area, perimeter) {
        this.weith = weith
        this.height = height
        this.area = this.weith * this.height
        this.perimeter = (this.weith + this.height) * 2
    }
}
let squed = new Rectangle(10, 20)
console.log(squed);