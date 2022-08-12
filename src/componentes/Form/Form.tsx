import React, { useState } from "react";
import { ButtonSearch } from "../ButtonSearch/ButtonSearch";
import { FieldSearch } from "../FieldSearch/FieldSearch";
import style from "./form.module.css"



export const Formulario =(props: any) =>{

    return <form  className={style}>
        <FieldSearch onSubmit={ props.onChangeCep} ></FieldSearch>
        <p className={style.alert}></p>
        <ButtonSearch onClick={props.onClick}></ButtonSearch>
    </form>;
}


