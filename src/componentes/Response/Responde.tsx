import "./Response.css";
import React, { useState } from "react";


 const Respons = (props:any)=>{
   
   
    return <React.Fragment>
   
        <div className={"block"} >
            <p className="closed" onClick={props.onClickClosed}>Fechar!</p>
            <h3>{"BAIRRO: "+props.obj.bairro}</h3>
            <h3>{"RUA :"+props.obj.rua}</h3>
            <h3>{"CIDADE: "+props.obj.cidade}</h3>
            <h3>{"UF: "+props.obj.uf}</h3>
           </div>
    </React.Fragment>
}


export {Respons}