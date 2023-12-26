const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

function copyEmailAndPhone() {
  const email = "dhrubajyotis006@gmail.com";
  const phoneNumber = "+918967160464";

  // Creating a temporary textarea element to copy text
  const dummyElement = document.createElement("textarea");
  document.body.appendChild(dummyElement);

  // Setting the value to be copied
  dummyElement.value = `Phone: ${phoneNumber}\nEmail: ${email}`;

  // Selecting and copying the text
  dummyElement.select();
  document.execCommand("copy");

  // Removing the temporary element
  document.body.removeChild(dummyElement);

  // Providing feedback for successful copying
  alert("Email and Phone copied to clipboard:\nEmail: " + email + "\nPhone: " + phoneNumber);
}