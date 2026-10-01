// Fecha o menu mobile ao clicar em um link (para quando adicionar menu mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Navegou para:', link.getAttribute('href'));
    });
});

// Ano automático no rodapé (opcional)
// Se quiser que o ano atualize sozinho, substitua o "2026" no HTML por:
// <span id="ano-atual"></span>
const anoAtual = document.getElementById('ano-atual');
if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

// Log simples para confirmar que o JS carregou
console.log('BETEL - Site carregado com sucesso ✅');
