//Modal pencere js düzenlemesini içerir

document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.getElementById("modal-container");

  function openModal() {
    modalContainer.classList.add("is-open");
  }

  function closeModal() {
    modalContainer.classList.remove("is-open");
  }

  document.querySelector(".modal-window-button").addEventListener("click", closeModal);

  document.querySelector(".contact-list-item").addEventListener("click", function(event) {
    event.preventDefault();  // mailto linkinin varsayılan davranışını engelle
    openModal();  // modal penceresini aç
  });
});
//Drawer Menu jS düzenlemesini içerir
function drawerToggleMenu() {
  const menu = document.getElementById("drawer-menu");
  menu.classList.toggle("is-open");
} 
