// Viết chương trình nhập vào 1 số rồi kiểm tra xem đó là số chẵn hay số lẻ.
var a = prompt('nhap a');
var b = a % 2;
if (b ==0) {
    console.log(a + ' là số chẵn');
} else {
    console.log(a + ' là số lẽ ');
}