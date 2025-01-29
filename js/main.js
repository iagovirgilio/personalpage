document.addEventListener('DOMContentLoaded', function () {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});

function loadImage(id, targetId) {
    var el = document.getElementById(id);
    var targetEl = targetId ? document.getElementById(targetId) : el;
    var imageToLoad;
    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    } else {
        imageToLoad = el.currentSrc;
    }
    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            targetEl.classList.add('is-loaded');
        };
    }
}

// WhatsApp Bubble com Timeout
setTimeout(() => {
    document.querySelector('.whatsapp-bubble').style.display = 'block';
}, 10000);

// Form Submission Melhorado
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phone = '5575981311648';
    const message = `Olá! Me chamo ${document.getElementById('nome').value}.
                     Email: ${document.getElementById('email').value}
                     Mensagem: ${document.getElementById('mensagem').value}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
