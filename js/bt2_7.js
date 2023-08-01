// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// let a = 1;
// let b = 2;
// let arr = [a, b];
function isANumber(a, b) {
    temp = a;
    a = b;
    b = temp;
    return temp;

}
let n = isANumber(1, 2)
 console.log(n);
