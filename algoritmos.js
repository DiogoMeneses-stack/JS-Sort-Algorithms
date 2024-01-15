function animateSort(iterations, delay) {
    const dados = document.querySelectorAll('.dado');

    for (let i = 0; i < iterations.length; i++) {
        setTimeout(() => {
            for (let j = 0; j < iterations[i].length; j++) {
                const index = iterations[i][j];
                dados[index].style.transition = `transform ${delay}ms`;
                dados[index].style.transform = `translateX(${j * 30}px)`;
            }
        }, i * delay);
    }

    setTimeout(() => {
        dados.forEach((dado) => {
            dado.style.transition = 'none';
            dado.style.transform = 'translateX(0)';
        });
    }, iterations.length * delay);
}

function sortElements() {
    // Obtém os elementos pela classe e converte para uma matriz
    const elementos = Array.from(document.querySelectorAll('.dado'));

    // Ordena os elementos com base no conteúdo (números)
    elementos.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));

    // Atualiza a ordem dos elementos no DOM
    elementos.forEach((elemento, index) => {
        elemento.style.order = index;
    });
}

function embaralhar() {
    var container = document.querySelector('.container-elementos');

    // Remove a ordem dos elementos antes de embaralhar
    Array.from(document.querySelectorAll('.dado')).forEach(elemento => {
        elemento.style.order = 'initial';
    });

    for (var i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}


/*

ALGORITMOS DE ORDENAÇÃO

*/

function executarAlgoritmo() {
    var selectElement = document.getElementById('algoritmoSelecionado');
    var algoritmoSelecionado = selectElement.value;

    let iterations = [];

    switch (algoritmoSelecionado) {
        case 'bubble-sort':
            iterations = bubbleSort();
            break;
        default:
            console.error('Algoritmo não reconhecido');
    }

    animateSort(iterations, 150);
}