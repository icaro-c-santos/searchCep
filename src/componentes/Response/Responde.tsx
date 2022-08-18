import style from "./Response.module.css";
import React from "react";


 const Response = (props:any)=>{
   
   
    return <React.Fragment>
   
        <div className={style.conteinerResponse} >
            <p className={style.closed} onClick={props.onClickClosed}>Fechar!</p>
            <h3>{"BAIRRO: "+props.obj.bairro}</h3>
            <h3>{"RUA :"+props.obj.rua}</h3>
            <h3>{"CIDADE: "+props.obj.cidade}</h3>
            <h3>{"UF: "+props.obj.uf}</h3>
           </div>
    </React.Fragment>
}


export {Response}