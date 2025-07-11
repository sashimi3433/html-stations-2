function displayList() {
  const fruitsDiv = document.getElementById("fruits");
  const pTags = fruitsDiv.querySelectorAll("p");
  const fruits = Array.from(pTags).map(p => `<li>${p.textContent}</li>`).join("");
  fruitsDiv.innerHTML = `<ul>${fruits}</ul>`;
}