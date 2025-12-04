// Função para aplicar o tema ao body e salvar no localStorage
function applyTheme(isDark) {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');

    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        
        // Atualiza o texto e ícone do botão
        if (toggleButton) {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        }
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        
        // Atualiza o texto e ícone do botão
        if (toggleButton) {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        }
    }
}

// 1. Carrega a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    
    // Se há um tema salvo, aplica-o.
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        // Se não há tema salvo, verifica a preferência do sistema
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark);
    }

    // 2. Adiciona o listener ao botão de alternância
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-mode');
            applyTheme(!isDark); // Alterna para o tema oposto
        });
    }
});