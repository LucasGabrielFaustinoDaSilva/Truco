let pontosTime1 = 0;
let pontosTime2 = 0;

function atualizarPlacar() {
  document.getElementById("pontos1").textContent = pontosTime1;
  document.getElementById("pontos2").textContent = pontosTime2;
}

function adicionarPonto(time) {
  if (time === 1 && pontosTime1 < 12) pontosTime1++;
  if (time === 2 && pontosTime2 < 12) pontosTime2++;
  verificarVencedor();
  atualizarPlacar();
}

function removerPonto(time) {
  if (time === 1 && pontosTime1 > 0) pontosTime1--;
  if (time === 2 && pontosTime2 > 0) pontosTime2--;
  atualizarPlacar();
}

function resetar() {
  pontosTime1 = 0;
  pontosTime2 = 0;
  atualizarPlacar();
}

function verificarVencedor() {
  if (pontosTime1 === 12) {
    alert("Time 1 venceu o Truco!");
    resetar();
  }
  if (pontosTime2 === 12) {
    alert("Time 2 venceu o Truco!");
    resetar();
  }
}
