function openModal(imageUrl) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function openLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'block';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', function() {
    var buyButton = document.getElementById('buy'); 
    
    if (buyButton) { 
        buyButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            var popup = document.getElementById('popup');
            if (popup) { 
                popup.style.display = 'block'; 
                setTimeout(function() {
                    popup.style.display = 'none'; 
                }, 2000);
            }
        });
    }
});

