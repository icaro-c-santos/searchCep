import fetch from "node-fetch";

fetch(`https://viacep.com.br/ws/00000000/json/`).then(res => res.json()).then(date =>{
    if(date.erro){console.log("a")}
});