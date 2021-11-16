import { render, API } from "./utils.js";

const list = (data) => {                                           // list riceverà un array di dati
    const elements = data
        .map(item => `<li>${item.title} - ${item.year}
        <button class="delete" id="${item.id}">x</button></li>`)
        .join('');

    const container = document.querySelector("#container");
    render(
        container,
        `
        <p>Elenco schede film</p>
        <ul>${elements}</ul>
        <a href="#add" id="add">Aggiungi una nuova scheda</a>
    `
    );

    const btns = [...document.querySelectorAll(".delete")];         // per ogni pulsante dentro questa lista di pulsanti
    btns.forEach((btn) => {                                         // metto un addEventListener
        btn.addEventListener("click", (event) => {
            const id = parseInt(event.target.id);
            const filtered = data.filter(movie => movie.id !== id);
            list(filtered);

            fetch(`${API}/${id}`, {method: "DELETE"});
        },
            { once: true }
        );
    });
};

export { list };