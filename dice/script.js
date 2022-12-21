const iniciativa = document.getElementById('iniciativa');
iniciativa.addEventListener('click', () => {
  fetch('http://191.9.126.30:2456/run-node-iniciativa')
    .then(response => response.text())
});

const ataqueDistancia = document.getElementById('ataque-distancia');
ataqueDistancia.addEventListener('click', () => {
  fetch('http://191.9.126.30:2456/run-node-ataque-distancia')
    .then(response => response.text())
});

const ataqueCorpo = document.getElementById('ataque-corpo');
ataqueCorpo.addEventListener('click', () => {
  fetch('http://191.9.126.30:2456/run-node-ataque-corpo')
    .then(response => response.text())
});