// This script handles the dynamic resizing of images
const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('mouseover', function() {
        // Add additional functionality if needed on hover
        console.log(`Hovered over ${image.alt}`);
    });

    image.addEventListener('mouseout', function() {
        // Add additional functionality if needed on mouse out
        console.log(`Mouse left ${image.alt}`);
    });
});
