
function getNumber(value: any){
        const newValue = value.replace("-","");
        const number = parseInt(newValue);
        return isNaN(number)? null : number;
}


function inputValide(value: any){
    if(value == null || value.length == 0){throw new Error("DIGITE UM VALOR!")}
    if(value.length<9 ){throw new Error("CEP INCOMPLETO!")}
    if(value.length >9){throw new Error("NÚMEROS EXCEDEU O LIMITE DE 8 DIGITOS!")}
    if(value[0]==0){throw new Error("CEP INVALIDO!")}
    return true;
}


 async function searchCep(cep:any) {
    inputValide(cep);
    try {
        const number = getNumber(cep);
        const result = await fetch(`https://viacep.com.br/ws/${number}/json/`);
        console.log(result);
        if(result.status==200){  
           return  await result.json();
        }  
        throw new Error("ERRO NO SERVIDOR! - VOLTE MAIS TARDE :)")
    } catch (error) {
        throw new Error("ERRO NO SERVIDOR! - VOLTE MAIS TARDE :)")
    }
}


 async function showCep(cep:any) {
    try {
        const res = await searchCep(cep);
        return res;
        
    } catch (error) {
        throw error;
    }
}


export {showCep }

