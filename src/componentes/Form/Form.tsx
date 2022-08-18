import React from "react";
import { ButtonSearch } from "../ButtonSearch/ButtonSearch";
import { FieldSearch } from "../FieldSearch/FieldSearch";
import style from "./Form.module.css"



export const Formulario =(props: any) =>{

    return <form  className={style.form}>
        <FieldSearch onSubmit={ props.onChangeCep} ></FieldSearch>
        <p className={style.alert}></p>
        <ButtonSearch onClick={props.onClick}></ButtonSearch>
    </form>;
}


