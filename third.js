document.addEventListener('DOMContentLoaded', function () {
    // Select the form correctly
    const reservationForm = document.querySelector('form');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submit

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;

            if (!name || !email || !date || !time || !guests) {
                alert('Please fill out all fields.');
                return;
            }

            alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been booked.`);
            reservationForm.reset();
        });
    } else {
        console.error('Reservation form not found.');
    }

    // Optional: Gallery images
    const galleryImages = document.querySelectorAll('.gallery-container img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            const enlargedImage = document.createElement('div');
            enlargedImage.classList.add('enlarged-image');
            enlargedImage.innerHTML = `
                <div class="overlay"></div>
                <img src="${img.src}" alt="${img.alt}">
            `;
            document.body.appendChild(enlargedImage);

            enlargedImage.addEventListener('click', function () {
                enlargedImage.remove();
            });
        });
    });
});
