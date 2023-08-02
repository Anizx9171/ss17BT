class Mobile {
    pin
    tinNhanDangSoan = ""
    hopThuDen = []
    hopThuGui = []
    status = true
    constructor(pin) {
        if (pin < 1 || pin > 100) {
            this.pin = 80
        } else {
            this.pin = pin
        }

        this.checkOnOff = () => {
            if (!this.status) {
                return
            }
            this.pin--;
            return this.status;
        }

        this.setOnOff = (value) => {
            if (!this.status) {
                return
            }
            this.status = value
            this.pin--;
        }

        this.sacPin = () => {
            console.log("Dang sac pin");
            this.pin++;
        }

        this.soanTinNhan = (value) => {
            if (!this.status) {
                return
            }
            this.tinNhanDangSoan = value
            this.pin--;
        }

        this.nhanTinNhan = (value) => {
            if (!this.status) {
                return
            }
            this.hopThuDen.push(value)
            this.pin--;
        }

        this.guiTinNhan = (phone) => {
            if (!this.status) {
                return
            }
            this.hopThuGui.push(this.tinNhanDangSoan)
            phone.nhanTinNhan(this.tinNhanDangSoan)
            this.tinNhanDangSoan = ""
            this.pin--;
        }

        this.xemTinNhanTrongHopThuDen = () => {
            if (!this.status) {
                return
            }
            this.pin--;
            return this.hopThuDen
        }

        this.xemTinNhanDaGui = () => {
            if (!this.status) {
                return
            }
            this.pin--;
            return this.hopThuGui
        }
    }
}

let nokia = new Mobile(23)
let iphone = new Mobile(45)
nokia.soanTinNhan("onoi dung bat ky")
nokia.guiTinNhan(iphone)
console.log(iphone.xemTinNhanTrongHopThuDen());