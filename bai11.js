var a = prompt('Nhập số a: ');
var b = prompt('Nhập số b: ');
var c = prompt('Nhập số c: ');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Vui lòng nhập đúng định dạng số!');
} else if (a <= 0 || b <= 0 || c <= 0) {
    console.log('Các số phải lớn hơn 0!');
} else if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
        console.log('Đây là tam giác đều');
    } else if (a === b || b === c || a === c) {
        console.log('Đây là tam giác cân');
    } else if (a * a + b * b === c * c || b * b + c * c === a * a || a * a + c * c === b * b) {
        console.log('Đây là tam giác vuông');
    } else {
        console.log('Tam giác thường');
    }
} else {
    console.log('Ba số này không tạo thành tam giác');
}
