// select elements
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }

  // one liner toggle
  sidebar.classList.toggle("show-sidebar");
});