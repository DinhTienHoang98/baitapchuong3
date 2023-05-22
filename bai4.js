// Viết chương trình nhập đáy trên a, đáy dưới b và chiều cao h của một hình thang. Tính diện tích của hình thang này.
var a = prompt('nhập đáy cạnh đáy trên a');
var b = prompt('nhập cạnh đáy dưới b ');
var h = prompt('nhập chiều cao h');
var s = h * ((Number (a) + Number (b)) / 2);
console.log('diện tích hình thang là ' + s);