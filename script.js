document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("click", function () {
    const textoOriginal = botao.textContent;

    botao.textContent = "Tenha uma ótima semana! 😄";
    botao.classList.add("mensagem");
    botao.disabled = true; 

    setTimeout(() => {
      botao.textContent = textoOriginal;
      botao.classList.remove("mensagem");
      botao.disabled = false; 
    }, 3000);
  });
});
