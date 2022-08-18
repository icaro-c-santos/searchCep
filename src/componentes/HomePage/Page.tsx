import React, { useState } from "react";
import { Header } from "../Header/Header";
import {Formulario }from "../Form/Form";
import { showCep } from "../../script";
import { Response } from "../Response/Responde";
import { ErroConteiner } from "../ErroConteiner/ErroConteiner";


export default () => {
  
  const [inputCep,setinputCetp] = useState({cep:""});
  const submitHandler = (input:any)=>{
      setinputCetp(input);
  }
  

  const [conteinerResponse,setconteinerResponse] = useState(<React.Fragment></React.Fragment>);

  const clearConteinerCep = ()=>{
    setconteinerResponse(prevValue=>{
      return <React.Fragment></React.Fragment>
    })
}
  const showConteinerCep = (response:any)=>{
    setconteinerResponse(<Response onClickClosed={clearConteinerCep}   obj={{bairro:response.bairro,rua:response.logradouro,cidade:response.localidade,uf:response.uf}}></Response>)
  }

  const showConteinerErro = (erro:String)=>{
    setconteinerResponse(<ErroConteiner msg={erro}></ErroConteiner>);
  }
 

 const searchCep = ()=>{
    showCep(inputCep.cep).then(response=>{
      if(response.erro){
        showConteinerErro("CEP NÃO ENCONTRADO!");
      }else{
        showConteinerCep(response)
      }
    }).catch(error=>{
      showConteinerErro(error.message);
    })
 }


  return <React.Fragment>
    <Header ></Header>
    {conteinerResponse}
    <Formulario onClick={searchCep} onChangeCep={submitHandler}></Formulario>
    <footer></footer>
  </React.Fragment>
}
