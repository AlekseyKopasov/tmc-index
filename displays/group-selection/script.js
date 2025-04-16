const selectedRoom = document.querySelector('.tmc__room-selected');
const selectedBlock = document.querySelector('.tmc__inventory-block');

if (selectedRoom) {
  if (selectedRoom.textContent.length) {
    selectedBlock.classList.add('is-visible');
  } else {
    selectedBlock.classList.remove('is-visible');
  }
}