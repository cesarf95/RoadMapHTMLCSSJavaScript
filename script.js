// Pega todos os checkboxes da página
const checkboxes = document.querySelectorAll("input[type='checkbox']");

// Sempre que o usuário clicar em um checkbox, guarda no localStorage
checkboxes.forEach((checkbox, index) => {
  // Recupera estado salvo (se tiver)
  const saved = localStorage.getItem("check-" + index);
  if (saved === "true") {
    checkbox.checked = true;
  }

  // Salva o novo estado sempre que mudar
  checkbox.addEventListener("change", () => {
    localStorage.setItem("check-" + index, checkbox.checked);
  });
});
