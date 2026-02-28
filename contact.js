const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contactForm");
const inquiryResult = document.getElementById("inquiryResult");

if (contactForm && inquiryResult) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const topic = formData.get("topic");

    inquiryResult.textContent = `Hvala, ${name}. Upit za '${topic}' je uspješno poslan. Naš tim će vam odgovoriti uskoro.`;
    contactForm.reset();
  });
}
