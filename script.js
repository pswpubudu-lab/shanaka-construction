// IMPORTANT: Replace the placeholder below with your WhatsApp number.
 // Use international format without +, spaces or dashes. Sri Lanka example: 94771234567
const WHATSAPP_NUMBER = "REPLACE_WITH_YOUR_NUMBER";
const DEFAULT_MESSAGE = "Hello Shanaka Construction, I would like to discuss a construction project and request a quotation.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  if (WHATSAPP_NUMBER !== "REPLACE_WITH_YOUR_NUMBER" && /^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  } else {
    link.href = "https://wa.me/?text=" + encodeURIComponent(DEFAULT_MESSAGE + " Please share your WhatsApp contact number.");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
