// CAPTURA OS ELEMENTOS
const body = document.querySelector('body');
const title = document.querySelector('h1');
const BGButton = document.querySelector('.label');
const listItens = document.querySelectorAll('li');
const check = document.getElementById('check');

// Função para adicionar a classe dark aos elementos
const nightMode = () => {
    body.classList.toggle('dark');
    title.classList.toggle('dark');
    BGButton.classList.toggle('dark');
    listItens.forEach(element => {
                    element.classList.toggle('dark')
                });
}

// Adiciona o evento no botão checkbox para quando "mudar", executar a função nightMode
check.addEventListener('change', nightMode);