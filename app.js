// Global Variables
let containerItems = Array.from(document.querySelectorAll("div.read"));
let noReadNotification = document.getElementById("num");
noReadNotification.innerHTML = containerItems.length;
let readAll = document.getElementById("mark-read");

// Mark all notification read by Mark all as read element
function markAllAsRead() {
  console.log(containerItems);
  for (let i = 0; i < containerItems.length; i++) {
    containerItems[i].classList.remove("read");
    console.log(containerItems[i].classList);
  }
}
// Event Listener to excute markAllAsRead function when clicking Mark all as read element
readAll.addEventListener("click", markAllAsRead);
readAll.addEventListener("click", updateNotification);

// updating the not read notification number
function updateNotification() {
  containerItems = Array.from(document.querySelectorAll("div.read"));
  noReadNotification.innerHTML = containerItems.length;
}
// Mark clicked notification read by clicking it
function markAsRead(e) {
  e.target.classList.remove("read");
  e.target.closest(".read").classList.remove("read");
}
