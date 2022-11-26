const topMenu = document.getElementById("top-menu");
const toggleMenu = document.getElementById("toggle-menu");

document.addEventListener("click", (e) => {
  if (toggleMenu.contains(e.target)) {
    // target ở đây là khi click vào bất cứ vị trí nào trên giao diện
    // và vào chỗ có chứa pt toggleMenu
    topMenu.classList.toggle("top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    // trường hợp click ra ngoài
    if (topMenu.classList.contains("top-menu-expanded")) {
      // kiểm tra khi đó class top-menu-expanded có đang active ko
      topMenu.classList.remove("top-menu-expanded");
      // nếu có thì remove và add hidden
      topMenu.classList.add("hidden");
    }
  }
});
