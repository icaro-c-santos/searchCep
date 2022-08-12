import React from "react";

import style from "./cep.module.css";

export const Cep = (props: any)=>{
    
    return <div style={style}>
        <p>Cep: {props.cep}</p>
        <p>Rua: {props.rua}</p>
        <p>Bairro: {props.bairro}</p>
        <p>Uf: {props.uf}</p>
        <p>Cidade: {props.cidade}</p>
    </div>

}