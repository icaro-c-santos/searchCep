import React, { useState } from "react";
import style from "./FieldSearch.module.css"


export const FieldSearch = (props:any)=>{


    const [cep,setCep] = useState({}); 
    

    const formateCep = (event:any)=>{
        event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
        var val = event.target.value.replace(/\D/g,"")                
        val=val.replace(/^(\d{5})(\d)/,"$1-$2") 
        event.target.value = val;
    
    }

    const cepChangeHandler = (event:any)=>{

        setCep((prevState)=>{
            return{...prevState, cep:event.target.value}
        })
    }
    props.onSubmit(cep);
  
    
    return <input type="text" id="field" onInput={formateCep}  maxLength={9} onChange={cepChangeHandler}  placeholder="DIGITE O CEP"  className={style.input}  />;

}



