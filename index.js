/* =========================
   MW-CONTACT FORM BUTTON 
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "http://127.0.0.1:5500/mw-thank-you.html";
        });
    }
});

/* =========================
   MW-PRIVACY DROPDOWN BOX
========================= */
document.addEventListener("DOMContentLoaded", function () {
    const privacyHeaders = document.querySelectorAll(".privacy-item-header");
    privacyHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            const item = this.closest(".privacy-item");
            const content = item.querySelector(".privacy-content");
            const arrow = item.querySelector(".privacy-arrow");
            content.classList.toggle("mw-hidden");
            arrow.classList.toggle("mw-arrow-up");
        });
    });
});

/* =========================
   MW-TERMS DROPDOWN BOX
========================= */
document.addEventListener("DOMContentLoaded", function () {
    const termHeaders = document.querySelectorAll(".term-header");
    termHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            const item = this.closest(".term-item");
            const content = item.querySelector(".term-content");
            const arrow = item.querySelector(".arrow");
            content.classList.toggle("mw-hidden");
            arrow.classList.toggle("mw-arrow-up");
        });
    });
});