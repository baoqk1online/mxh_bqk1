(function () {
  // Lấy URL hiện tại (không hash) để QR luôn trỏ về trang này
  var pageURL = window.location.href.split("#")[0];
  document.getElementById("urlText").textContent = pageURL;

  // Cập nhật link của ảnh để khi bấm vào ảnh cũng mở trang này
  document.getElementById("homeLink").setAttribute("href", pageURL);

  // Tạo QR code vào canvas
  var canvas = document.getElementById("qrCanvas");
  if (window.QRCode && canvas) {
    QRCode.toCanvas(canvas, pageURL, { width: 220, margin: 1 }, function (error) {
      if (error) console.error(error);
    });
  }
})();
