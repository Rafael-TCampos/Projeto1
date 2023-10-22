const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// Uma matriz de requisitos de senha com correspondência
// expressões regulares e índice do item da lista de requisitos

const requirements = [
  { regex: /.{8,}/, index: 0 }, // Mínimo de 8 caracteres
  { regex: /[0-9]/, index: 1 }, // Pelo menos um numero
  { regex: /[a-z]/, index: 2 }, // Pelo menos uma letra minúscula
  { regex: /[^A-Za-z0-9]/, index: 3 }, // Pelo menos um caracter especial
  { regex: /[A-Z]/, index: 4 }, // Pelo menos uma letra maiuscula
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Verifica se a senha corresponde ao regex requerido
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        //Atualizando classe e ícone do item de requisito se o requisito corresponde ou não
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Alterna o tipo de entrada de senha entre "senha" e "texto"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    //Atualiza a classe do ícone de olho com base no tipo de entrada de senha
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});