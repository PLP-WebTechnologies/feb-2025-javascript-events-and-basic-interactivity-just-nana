
// Button Interaction
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    myButton.textContent = 'You Clicked Me!';
    myButton.style.backgroundColor = '#FFD700';
    myButton.style.color = 'white';
});

// Tabs Functionality
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Remove active class from all tablinks
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Show the current tab and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Set default tab to open
document.querySelector('.tablinks').click();


// Lightbox Functionality
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Form Validation
function validateForm() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    // Name validation
    if (nameField.value.trim() === '') {
        nameError.style.display = 'inline';
        nameField.style.borderColor = 'red';
        isValid = false;
    } else {
        nameError.style.display = 'none';
        nameField.style.borderColor = '';
    }

    // Email validation
    if (!emailPattern.test(emailField.value.trim())) {
        emailError.style.display = 'inline';
        emailField.style.borderColor = 'red';
        isValid = false;
    } else {
        emailError.style.display = 'none';
        emailField.style.borderColor = '';
    }

    return isValid;
}