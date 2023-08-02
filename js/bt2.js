class Temperature {
    constructor(C) {
        this.C = C
    }
    CchangeF = () => { return this.C + 33.8 }
    CchangeK = () => { return this.C + 274.15 }
}
let nhitDo = new Temperature(25);
console.log(nhitDo);
console.log(nhitDo.CchangeF());
console.log(nhitDo.CchangeK());