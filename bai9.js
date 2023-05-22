// Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).
var a = parseFloat(prompt('Nhập a:'));
var b = parseFloat(prompt('Nhập b:'));
var c = parseFloat(prompt('Nhập c:'));

var d = b * b - 4 * a * c;

if (d > 0) {
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log('Phương trình có 2 nghiệm:', x1.toFixed(2), x2.toFixed(2));
} else if (d === 0) {
    var x = -b / (2 * a);
    console.log('Phương trình có nghiệm kép:', x.toFixed(2));
} else {
    console.log('Phương trình không có nghiệm thực.');
}
