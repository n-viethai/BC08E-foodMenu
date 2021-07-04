import { MonAn } from "../models/MonAn.js";

let arrMonAn = [];

document.querySelector("#btnThemMon").onclick = () => {
  //  tạo đối tượng chứa thông tin user nhập vào.
  let monAn = new MonAn();
  // console.log('món ăn :',monAn);

  let arrTagInput = document.querySelectorAll(
    "form input, form select, form textarea"
  );
  // console.log(arrTagInput);

  for (let input of arrTagInput) {
    let { name, value } = input;

    // gán giá trị cho monAn qua name
    monAn[name] = value; //cách 1
    // monAn = {...monAn,[name] : value}; // cách 2
  }
  // hiển thị thông tin lên giao diện

  let arrTagOutput = document.querySelectorAll(
    ".list-group-item span, .list-group-item p, .list-group-item img"
  );
  console.log(arrTagOutput);
  for (let tag of arrTagOutput) {
    // đối với 1 số thẻ không có thuộc tính dom mà ta thêm vô.
    let name = tag.getAttribute("name"); //dùng để lấy các thuộc tính mình tự thêm vô.
    if (name === "giaSauKhuyenMai") {
      tag.innerHTML = monAn.tinhGiaKhuyenMai();
    } else if (name === "hinhAnh") {
      tag.src = monAn["hinhAnh"];
    } else if (name === "loaiMon") {
      tag.innerHTML = monAn[name] === "loai1" ? "Chay" : "Mặn";
    } else if (name === "tinhTrang") {
      tag.innerHTML = monAn[name] === "1" ? "Còn" : "Hết";
    } else {
      tag.innerHTML = monAn[name];
    }
  }

  arrMonAn.push(monAn);
  localStorage.setItem('danhSachMonAn', JSON.stringify(arrMonAn));
};
