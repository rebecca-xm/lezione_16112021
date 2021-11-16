import { API } from "./utils.js";
import { list } from "./list.js";
import { add } from "./add.js";

// const list = (data) => {                            // list riceverà un array di dati
//     const elements = data
//         .map(item => `<li>${item.title} - ${item.year}</li>`)
//         .join('');

//     const container = document.querySelector("#container");
//     render(
//         container,
//         `
//         <p>Elenco schede film</p>
//         <ul>${elements}</ul>
//     `
//     );
// };

const loadList = () =>
    fetch("https://edgemony-backend.herokuapp.com/movie")                                   // errore volontario per triggerare l'alert
        .then((response) => {                                                               // ricordati di tornare ad => (API)!!!
            if (response.status === 404) {
                console.error("READ HERE: Could not load remote data, is server on?");      // alert per gli sviluppatori
                document.querySelector(".alert").classList.add("show");                     // alert per l'utente
            } else {
                return response.json();
            }
        })
        .then((data) => list(data));

document.addEventListener("DOMContentLoaded", loadList);
// fetch(API)
//     .then((response) => response.json())
//     .then((data) => list(data));

// const btn = document.querySelector("#add");
// btn.addEventListener("click", add);
// });

// PROVA #

window.addEventListener("hashchange", () => {
    console.log("hash has changed", location.hash);
    // if(location.hash === "#add") {
    //     add();
    // }
    switch (location.hash) {
        case "#add":
            add();
            break;
        case "":
            // fetch(API)
            //     .then((response) => response.json())
            //     .then((data) => list(data));
            loadList();
            break;
    }
});