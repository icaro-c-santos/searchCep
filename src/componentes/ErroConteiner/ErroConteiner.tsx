import React from "react";

import style from "./ErroConteiner.module.css";

const ErroConteiner = (props:any)=>{
    return <div className={style.divErro}>ERRO: {props.msg}</div>
}



export {ErroConteiner}