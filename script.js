const msg_btn = document.getElementById("message-button");
msg_btn.onclick = function() {
    const form_container = document.getElementById("form-container");
    form_container.style.display = "block";
    msg_btn.style.display = "none";
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
    });
}