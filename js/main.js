document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".nav-menu");

  burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burgerMenu.classList.toggle("open");
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input").value;
    alert(`Thank you for subscribing with ${email}!`);
    newsletterForm.reset();
  });
});
