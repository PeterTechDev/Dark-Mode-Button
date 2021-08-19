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
    listItens.forEach(element => {
                    element.classList.add('dark')
                })
}

// Adiciona o evento no botão checkbox para quando houver uma "mudança" no botão executar a função nightmode
check.addEventListener('change', nightMode);