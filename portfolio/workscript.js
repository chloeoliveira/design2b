document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');

    images.forEach(function(img) {
        img.addEventListener('click', function(event) {
            event.stopPropagation();
            if (this.style.transform === 'scale(1.5)') {
                window.open(this.parentElement.href);
            } else {
                this.style.zIndex = 9999;
                this.style.transform = 'scale(1.5)';
            }
        });

        img.addEventListener('mouseleave', function() {
            this.style.zIndex = 1;
            this.style.transform = 'scale(1)';
        });
    });
});