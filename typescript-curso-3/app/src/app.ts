import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
const btnImporta = document.querySelector('#botao-importa');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

if (btnImporta) {
    btnImporta.addEventListener('click', () => {
        controller.importarDados();
    })
} else {
    throw Error('Não foi possível importar dados. Verifique se o botão existe');
}

