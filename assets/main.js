document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.getElementById("userTime");
  if (timeEl) timeEl.textContent = Date.now();
});

document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.id !== "contactForm") return;
  e.preventDefault();

  let valid = true;
  const name = form.querySelector('[data-testid="test-contact-name"]');
  const email = form.querySelector('[data-testid="test-contact-email"]');
  const subject = form.querySelector('[data-testid="test-contact-subject"]');
  const message = form.querySelector('[data-testid="test-contact-message"]');
  const successMsg = document.getElementById("successMsg");

  form.querySelectorAll(".error").forEach(el => el.textContent = "");
  successMsg.textContent = "";

  if (!name.value.trim()) {
    form.querySelector('[data-testid="test-contact-error-name"]').textContent = "Full name required.";
    valid = false;
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    form.querySelector('[data-testid="test-contact-error-email"]').textContent = "Invalid email.";
    valid = false;
  }
  if (!subject.value.trim()) {
    form.querySelector('[data-testid="test-contact-error-subject"]').textContent = "Subject required.";
    valid = false;
  }
  if (message.value.trim().length < 10) {
    form.querySelector('[data-testid="test-contact-error-message"]').textContent = "At least 10 characters.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "✅ Message sent successfully!";
    form.reset();
  }
});
