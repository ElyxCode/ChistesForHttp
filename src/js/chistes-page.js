import { obtenerChiste } from "./http-provider.js";

const body = document.querySelector('body');
let btnOtro, olList;
let num = 1;

const crearChisteHtml = () => {
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>
        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group"></ol>
    `;

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;

    body.append(divChiste);
};

const evento = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {

        btnOtro.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    });
};

// chiste {id, value}
const dibujarChiste = ({id, value}) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `${num}. <b>${id}</b>: ${value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
    num++;
}

export const init = () => {

    crearChisteHtml();
    evento();
};