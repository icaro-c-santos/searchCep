import React from "react"
import style from "./button.module.css"

export const ButtonSearch = ( props:any)=>{
    return <button id="button" onClick={props.onClick}  type="button" className={style}>Buscar</button>
  
}
  
