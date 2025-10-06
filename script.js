/**
 * Handles the display of the contact form when the message button is clicked.
 * Hides the message button and shows the form container.
 */


const msg_btn = document.getElementById("message-button");
msg_btn.onclick = function() {
    const form_container = document.getElementById("form-container");
    form_container.style.display = "block";
    msg_btn.style.display = "none";
}

/**
 * Adds smooth scrolling behavior to all navigation links.
 * Prevents default anchor behavior for internal links and scrolls smoothly to the target section.
 */

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth'});/*this will make the scrolling smooth*/
        }
    });
});

/**
 * Handles the contact form submission.
 * Prevents the default form submission, hides the form, and displays a success message.
 */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
    });
}