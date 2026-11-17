const lampada = document.getElementById("lamp");
const botao = document.getElementById("toggle-lamp");
let acesa = false;

function alternarLampada() {
  acesa = !acesa;
  lampada.src = acesa ? "assets/lamp_on.png" : "assets/lamp_off.png";
  lampada.alt = acesa ? "Lâmpada acesa" : "Lâmpada apagada";
  botao.textContent = acesa ? "Apagar lâmpada" : "Acender lâmpada";
  botao.setAttribute("aria-pressed", String(acesa));
  document.body.classList.toggle("acesa", acesa);
}

botao.addEventListener("click", alternarLampada);
