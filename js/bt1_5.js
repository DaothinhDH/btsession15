// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus.
//  Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các 
// ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo.
//Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất.Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao.
// Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai.Nói cách khác, trả lại tên chòm sao của ngôi sao đó.
// Trong phần của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào.
// Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào.Cho kết quả hiển thị trên màn hình.
let arr1 = [`Polaris`, `Aldebaran`, `Deneb`, `Vega`, `Altair`, `Dubhe,Regulus`];
let arr2 = [`Ursa Minor`, `Tarurus`, `Cygnus`, `Lyra`, `Aquila`, `Ursa Major`, `Leo`];

let a = prompt("Hãy nhập vào ngôi sao bạn chọn")

function check(string) {
    let check = false
    for (i = 0; i < arr1.length; i++) {
        if (string == arr1[i]) {
            console.log(arr2[i]);
            check = true
            return
        }
    }

    if (check == false) {
        console.log("không tìm thấy");
    }
}

check(a)
