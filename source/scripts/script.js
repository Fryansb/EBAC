document.addEventListener('DOMContentLoaded', function() {
    console.log('O JavaScript e o DOM foram carregados com sucesso!');

    const images = document.querySelectorAll('.gallery-image');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            images.forEach(img => img.classList.remove('clicked'));

            this.classList.add('clicked');
            console.log('Imagem clicada:', this.alt);
        });
    });
});