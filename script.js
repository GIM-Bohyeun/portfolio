
function openPopup(src) {
  document.getElementById("popupImg").src = src;
  document.getElementById("imagePopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}
