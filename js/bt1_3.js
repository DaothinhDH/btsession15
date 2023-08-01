// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai,
//  hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng
//  tham số thứ hai, trả về tổng của hai tham số.

function isANumber(number1, number2) {
    if (number1 > number2) {
        alert("isANumber")
    } else {
        alert(`tổng của hai tham số là ${number1 + number2}`)
    }
}
isANumber(5, 7);