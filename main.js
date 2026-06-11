// Seleciona todos os botões seletores das práticas agrícolas
const checkboxes = document.querySelectorAll('.practice-check');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('status-message');

// Adiciona um evento de escuta para cada seletor quando muda de estado (ativado/desativado)
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calculateSustainability);
});

// Função responsável por calcular e atualizar o índice de sustentabilidade
function calculateSustainability() {
    let totalScore = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            totalScore += parseInt(checkbox.getAttribute('data-points'));
        }
    });

    // Atualiza a percentagem exibida dentro do círculo
    scoreDisplay.textContent = `${totalScore}%`;

    // Atualiza o feedback textual com base na pontuação atingida
    if (totalScore === 0) {
        messageDisplay.textContent = "Sua fazenda precisa adotar práticas ecológicas.";
        scoreDisplay.style.borderColor = "#52b788";
    } else if (totalScore > 0 && totalScore <= 50) {
        messageDisplay.textContent = "Bom começo! Mas a produção ainda gera muito impacto negativo.";
        scoreDisplay.style.borderColor = "#d8f3dc";
    } else if (totalScore > 50 && totalScore < 100) {
        messageDisplay.textContent = "Ótimo caminho! O equilíbrio entre ganho econômico e ambiental está perto.";
        scoreDisplay.style.borderColor = "#52b788";
    } else if (totalScore === 100) {
        messageDisplay.textContent = "Excelente! Fazenda 100% em equilíbrio. Produção forte e futuro garantido!";
        scoreDisplay.style.borderColor = "#b7e4c7";
    }
}