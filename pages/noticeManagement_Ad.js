const fileInput = document.getElementById('fileInput')
const searchFileInput = document.getElementById('searchFileInput')
const fileInputModify = document.getElementById('fileInputModify')
const searchFileInputModify = document.getElementById('searchFileInputModify')


function getFileName(){
  searchFileInput.innerHTML = fileInput.files[0].name
}
function getFileNameModify(){
  searchFileInputModify.innerHTML = fileInputModify.files[0].name
}

fileInput.addEventListener('change', getFileName)
fileInputModify.addEventListener('change', getFileNameModify)