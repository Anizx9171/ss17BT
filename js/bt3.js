class Mobile {
    constructor() {
        this.Trangthai = true
        this.pin = 60
        this.tindagui = []
        this.tindaden = []
        this.tindangsoanthao = []
    }
    off() {
        if (this.pin < 1) {
            this.Trangthai = false
        }
    }
    onoff(a) {
        this.Trangthai = a
    }
    tindaguiz(a, dt) {
        if (this.Trangthai) {
            this.tindagui.push(a)
            dt.tindaden.push(a)
            this.pin--
        } else { console.log(`Máy chưa được bật`); }
        return true
    }
    tindadenz(b) {
        if (this.Trangthai) {
            this.tindagui.push(b)
            this.pin--
        }
        else { console.log(`Máy chưa được bật`); }
    }
    tindangsoanthaoz(c) {
        if (this.Trangthai) {
            this.tindagui.push(c)
            this.pin--
        } else { console.log(`Máy chưa được bật`) }
    }
    sacpin() {
        if (this.pin >= 100) {
            console.log(`Pin đã đầy`);
        } else {
            this.pin++
        }
    }
    xemtinnhanden() {
        console.log(this.tindaden);
    }
}
let iphone = new Mobile()
let nokia = new Mobile()

nokia.tindaguiz("xin chao", iphone)
iphone.xemtinnhanden()