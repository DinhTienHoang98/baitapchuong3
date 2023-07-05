// Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).
var a = prompt('nhap a');
var b = prompt('nhap b');
var x;
if (a == 0) {
    if (b == 0) {
        console.log('pt vô số nghiệm');
    } else {
        console.log('pt vô nghiệm');
    }
} else {
    x = -b / a;
    console.log(x.toFixed(2));
}
