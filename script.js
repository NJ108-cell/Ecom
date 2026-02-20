const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

function showFullscreen(imgElement) {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullImage = document.getElementById('fullImage');
    const imageDetails = document.getElementById('imageDetails');
  
    fullImage.src = imgElement.src;
    imageDetails.textContent = imgElement.alt; // Assuming the alt attribute contains details
  
    fullscreenContainer.style.display = 'flex';
  }
  
  document.getElementById('fullscreenContainer').onclick = function() {
    this.style.display = 'none';
  }
  
  