
function getNumber(value: any){
        const number = parseInt(value);
        return isNaN(number)? null : number;
}


function inputValide(value: any){
    if(value == null || value.length == 0){throw new Error("DIGITE UM VALOR!")}
    if(value.length<8 ){throw new Error("CEP INCOMPLETO!")}
    if(value.length >8){throw new Error("NÚMEROS EXCEDEU O LIMITE DE 8 DIGITOS!")}
    return true;
}


 async function searchCep(cep:any) {
   
    try {
        inputValide(cep);
        const number = getNumber(cep);
        const result = await fetch(`https://viacep.com.br/ws/${number}/json/`);
        if(result.status==200){  
            const res = await result.json();
            console.log(res);
            if(res.erro){
                throw new Error("CEP NÃO ENCONTRADO!")
            }else{
                return res;
            }
        }
        throw new Error("ERRO NO SERVIDOR! - VOLTE MAIS TARDE :)")
    } catch (error) {
        console.log(error);
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

