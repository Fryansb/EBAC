/* ===== Captura de Elementos ===== */
const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');
let formularioEhValido;

/* ===== Função de Validação ===== */
function validaCampos(numeroA, numeroB) {
    return numeroB > numeroA;
}

/* ===== Evento de Envio do Formulário ===== */
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio tradicional do formulário

    const numeroA = parseFloat(campoA.value);
    const numeroB = parseFloat(campoB.value);

    formularioEhValido = validaCampos(numeroA, numeroB);

    if (formularioEhValido) {
        mensagem.innerHTML = `Formulário válido: <b>o número B (${numeroB}) é maior que o número A (${numeroA})</b>.`;
        mensagem.className = 'mensagem positivo';
        mensagem.style.display = 'block';

        // Limpa os campos após o envio
        campoA.value = '';
        campoB.value = '';
    } else {
        mensagem.innerHTML = `Formulário inválido: <b>o número B (${numeroB}) deve ser maior que o número A (${numeroA})</b>.`;
        mensagem.className = 'mensagem negativo';
        mensagem.style.display = 'block';

        // Aplica estilo de erro ao campo B
        campoB.classList.add('error');
    }
});

/* ===== Evento de Digitação no Campo B ===== */
campoB.addEventListener('keyup', function(e) {
    const numeroA = parseFloat(campoA.value);
    const numeroB = parseFloat(e.target.value);

    formularioEhValido = validaCampos(numeroA, numeroB);

    if (!formularioEhValido) {
        campoB.classList.add('error');
    } else {
        campoB.classList.remove('error');
    }
});
