// CAPTURA OS ELEMENTOS
const button = document.querySelector("button");
const darkModeBtn = document.getElementById('btn-darkmode');
const body = document.querySelector('body');
const title = document.querySelector('h1');
const BGButton = document.querySelector('.label')
const listItens = document.querySelectorAll('li');
const check = document.getElementById('check');

// Função para adicionar a classe dark aos elementos
const nightMode = () => {
    body.classList.toggle('dark');
    title.classList.toggle('dark');
    BGButton.classList.toggle('dark')

    checkListItens()
}


// Função para verifica se os li possuem a classe dark usando o title como referência
const checkListItens = () => {
    if (title.classList.contains('dark')) {
        listItens.forEach(element => {
            element.classList.add('dark')
        });
    } else {
        listItens.forEach(element => {
            element.classList.remove('dark')
        })
    }
}

// Adiciona o evento no botão checkbox para quando "mudar" executar a função nightMode
check.addEventListener('change', nightMode);