import React from "react"
import style from "./ButtonSearch.module.css"

export const ButtonSearch = ( props:any)=>{
    return <button id="button" onClick={props.onClick}  type="button" className={style.button}>Buscar</button>
  
}
  
