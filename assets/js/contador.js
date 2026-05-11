const anos = document.getElementById("anos");
const clientes = document.getElementById("clientes");
const avaliacao = document.getElementById("avaliacao");

function animarContador(elemento, inicio, fim, duracao) {
    let startTime = null;

    function animar(timestamp) {
        if(!startTime) startTime = timestamp;

        const tempoPassado = timestamp - startTime;
        const progresso = Math.min(tempoPassado / duracao, 1);

        const valorAtual = Math.round(inicio + (fim - inicio) * progresso);
        elemento.textContent = valorAtual;

        if(progresso < 1) {
            requestAnimationFrame(animar);
        }
    }

    requestAnimationFrame(animar);
}

animarContador(anos, 0, 15, 1800);
animarContador(clientes, 0, 10, 2000);
animarContador(avaliacao, 0, 5, 1200);

