document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector("#toggle-button");
    var clarificationSection = document.querySelector("#clarification");

    clarificationSection.style.display = "none";

    toggleButton.addEventListener("click", function() {
        if (clarificationSection.style.display === "none") {
            clarificationSection.style.display = "block";
            toggleButton.textContent = "Ocultar";
        } else {
            clarificationSection.style.display = "none";
            toggleButton.textContent = "Exibir";
        }
    });
});
