import React, { useState } from "react";
import style from "./field.module.css"


export const FieldSearch = (props:any)=>{

    const [cep,setCep] = useState({}); 

    const cepChangeHandler = (event:any)=>{
        setCep((prevState)=>{
            return{...prevState, cep:event.target.value}
        })
    }
    props.onSubmit(cep);


    return <input type="text" id="field" onChange={cepChangeHandler} placeholder="DIGITE O CEP"  className={style} />;

}


