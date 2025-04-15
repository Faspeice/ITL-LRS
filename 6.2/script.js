document.addEventListener('DOMContentLoaded', function() {

    const galleries = document.querySelectorAll('.photo-stack');

    galleries.forEach(gallery => {
        const photos = gallery.querySelectorAll('.photo');

        photos.forEach(photo => {
            photo.addEventListener('mouseenter', function() {

                photos.forEach(p => p.classList.remove('active'));

                this.classList.add('active');
            });
        });
    });
});