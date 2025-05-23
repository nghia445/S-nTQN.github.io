let index = 0;
const images = document.querySelectorAll(".anh img");
const totalImages = images.length;

function nextSlide() {
  index = (index + 1) % totalImages;
  document.querySelector(".anh").style.transform = `translateX(${
    -index * 300
  }px)`;
}

setInterval(nextSlide, 3000); // Tự động chuyển ảnh sau 2 giây

// Lấy tất cả các nút và nội dung sân
const buttons = document.querySelectorAll(".btn");
const courts = document.querySelectorAll(".court");

// Xử lý sự kiện click cho các nút
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Lấy id của sân từ thuộc tính data-target
    const targetCourt = button.getAttribute("data-target");

    // Lấy phần tử sân theo id
    const selectedCourt = document.getElementById(targetCourt);

    // Kiểm tra nếu sân đã có lớp active
    if (selectedCourt.classList.contains("active")) {
      // Nếu sân đã hiển thị, ẩn nó
      selectedCourt.classList.remove("active");
    } else {
      // Nếu sân chưa hiển thị, ẩn tất cả các sân trước
      courts.forEach((court) => {
        court.classList.remove("active");
      });

      // Hiển thị sân đã được chọn
      selectedCourt.classList.add("active");
    }
  });
});

function thongbao() {
  var input = document.getElementById("sdt");
  if (!input.value) {
    // Kiểm tra nếu ô nhập liệu chưa có giá trị
    input.title = "Chưa cập nhật"; // Hiển thị thông báo khi chưa có dữ liệu
  } else {
    input.title = ""; // Nếu có dữ liệu, không hiển thị thông báo
  }
}
