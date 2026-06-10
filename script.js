// Aguarda todo o conteúdo da página ser carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO DE MUDANÇA DE COR NO MENU AO ROLAR A PÁGINA
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        // Se a página for rolada mais de 50 pixels, adiciona uma classe de sombra
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 10px 30px rgba(45, 106, 79, 0.15)";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            // Volta ao estado original quando estiver no topo
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.03)";
            navbar.style.background = "rgba(255, 255, 255, 0.85)";
        }
    });

    // 2. MENSAGEM DE BOAS-VINDAS NO CONSOLE (Para testar se está funcionando)
    console.log("🌱 Script do AgroForte carregado com sucesso! Pronto para o Agrinho.");
});