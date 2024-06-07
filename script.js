document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector("#toggle-button");
    var clarificationSection = document.querySelector("#clarification");

    /* Ocultar Padrão */
    clarificationSection.style.display = "none";

    /* Centralizar e Margem */
    toggleButton.style.display = "block";
    toggleButton.style.margin = "30px auto";

    /* Evento de Clique */
    toggleButton.addEventListener("click", function() {
        if (clarificationSection.style.display === "none") {
            clarificationSection.style.display = "block";
            toggleButton.textContent = "Ocultar!";
        } else {
            clarificationSection.style.display = "none";
            toggleButton.textContent = "Saiba Mais!";
        }
    });
});
