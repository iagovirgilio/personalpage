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
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Validação simples
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const phone = '5575981311648';
    const message = `Olá! Me chamo ${nome}. Email: ${email} Mensagem: ${mensagem}`;

    // Exibir feedback visual
    const feedback = document.getElementById('form-feedback');
    feedback.style.display = 'block';
    feedback.textContent = 'Enviando sua mensagem...';

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');

    // Limpar o formulário
    document.getElementById('contato-form').reset();
    
    // Exibir mensagem de sucesso
    setTimeout(() => {
        feedback.textContent = 'Mensagem enviada com sucesso!';
    }, 1000);
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
