class Rectangle {
    weith
    height
    constructor(weith, height) {
        this.weith = weith
        this.height = height
        this.area = () => { console.log(this.weith * this.height) }
        this.perimeter = () => { console.log((this.weith + this.height) * 2) }
    }
}
let squed = new Rectangle(10, 20)
console.log(squed);
squed.area()
squed.perimeter()