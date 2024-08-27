const addBtn = document.getElementById('addBtn')
const modifyBtn = document.getElementById('modifyBtn')
const modal = document.querySelector('.modal')
const addAdmin = document.querySelector('.addAdmin')
const adminDetails = document.querySelector('.adminDetails')
const modifyAdmin = document.querySelector('.modifyAdmin')
const closeIcons = document.querySelectorAll('.closeIcon')
const adminCells = document.querySelectorAll('.adminCell')

function openAddModal(){
  modal.classList.add('show')
  addAdmin.classList.add('show')
}
function closeModal(){
  modal.classList.remove('show')
  addAdmin.classList.remove('show')
  adminDetails.classList.remove('show')
  modifyAdmin.classList.remove('show')
}
function openDetailsModal(){
  modal.classList.add('show')
  adminDetails.classList.add('show')
}
function openModifyModal(){
  adminDetails.classList.remove('show')
  modifyAdmin.classList.add('show')
}

addBtn.addEventListener('click', openAddModal)
for(let closeIcon of closeIcons){
  closeIcon.addEventListener('click', closeModal)
}
for(let adminCell of adminCells){
  adminCell.addEventListener('click', openDetailsModal)
}
modifyBtn.addEventListener('click', openModifyModal)