// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
// công thức:  n × m! = (n × m)! / (m – 1)!

function isANumber(number) {
    let factorial = 1
    for (i = 1; i <= number; i++)
        factorial *= i;
    return factorial;

}
let a = isANumber(5);
console.log(a);