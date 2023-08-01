// Bài2: Viết chương trình tạo hàm tính diện tích và chu vi hình tròn

//  chức năng: tính diện tích và chu vi
// tên hàm: calculateAreAndPerimetterOfCircle
// tham số đầu vào:1 tham số là bán kính
// giá trị trả về: 1 mảng 2 phần tử gồm diện tích

// triển khai code
function calculateAreAndPerimetterOfCircle(radius) {
    let area = Math.PI * radius * radius // Diện tích
    let perimeter = 2 * Math.PI * radius // chu vi
    return [area, perimeter]; // trả về giá trị
}

// kiểm tra hàm hoạt động tốt không
// th1 r =5 
console.log(calculateAreAndPerimetterOfCircle(5));