export class MonAn {
    maMon = '';
    tenMon = '';
    loaiMon = '';
    giaMon = 0;
    khuyenMai = 0;
    tinhTrang = false;
    hinhAnh = '';
    moTa = '';
    constructor() {

    }

    tinhGiaKhuyenMai = () => {
        return this.giaMon*( 1 - this.khuyenMai/100 );
    }

    hienThiThongTinh = () => {
        return '';
    }
}