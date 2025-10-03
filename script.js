const msg_btn = document.getElementById("message-button");
msg_btn.onclick = function() {
    const form_container = document.getElementById("form-container");
    form_container.style.display = "block";
    msg_btn.style.display = "none";
}