/*======================================
  ASYNC CONTACT FORM
======================================*/

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Disable button while sending
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i> Sending...
    `;

    // Hide previous message
    formMessage.className = "form-message";

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {

            formMessage.innerHTML = `
                ✅ <strong>Thank you!</strong><br>
                Your message has been sent successfully.<br>
                I'll get back to you as soon as possible.
            `;

            formMessage.className = "form-message success show";

            contactForm.reset();

        } else {

            formMessage.innerHTML = `
                ❌ <strong>Oops!</strong><br>
                Something went wrong.<br>
                Please try again.
            `;

            formMessage.className = "form-message error show";
        }

    } catch (error) {

        formMessage.innerHTML = `
            ❌ <strong>Network Error</strong><br>
            Please check your internet connection<br>
            and try again.
        `;

        formMessage.className = "form-message error show";
    }

    // Restore button
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.remove("show");
    }, 5000);
});