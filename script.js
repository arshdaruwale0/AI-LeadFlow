// ================================
// AI LEADFLOW — WEBSITE FUNCTIONS
// ================================

const DEMO_FORM_URL =
    "http://localhost:5678/form/be22a283-3aad-45d2-8a72-a75c4410574c";


// Live Demo button
const demoButton = document.getElementById("demoButton");

if (demoButton) {
    demoButton.addEventListener("click", function (event) {
        event.preventDefault();

        window.open(DEMO_FORM_URL, "_blank");
    });
}