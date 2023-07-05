// Hàm giải phương trình bậc 2
function giaiPhuongTrinhBac2(a, b, c) {
    var delta = b * b - 4 * a * c;
    var ketQua = [];
  
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        ketQua.push(x1, x2);
    } else if (delta === 0) {
        var x = -b / (2 * a);
        ketQua.push(x);
    }
  
    return ketQua;
}

// Nhập các hệ số từ màn hình
var a = parseFloat(prompt("Nhập hệ số a:"));
var b = parseFloat(prompt("Nhập hệ số b:"));
var c = parseFloat(prompt("Nhập hệ số c:"));

// Gọi hàm giải phương trình bậc 2 và in kết quả
var ketQua = giaiPhuongTrinhBac2(a, b, c);

if (ketQua.length === 0) {
    console.log("Phương trình không có nghiệm thực.");
} else if (ketQua.length === 1) {
    console.log("Phương trình có một nghiệm: x =", ketQua[0]);
} else {
    console.log("Phương trình có hai nghiệm: x1 =", ketQua[0], "và x2 =", ketQua[1]);
}
